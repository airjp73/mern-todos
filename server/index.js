"use strict"

var express       = require("express")
var mongoose      = require('mongoose')
var passport      = require("passport")
var cookieSession = require('cookie-session')
var bodyParser    = require('body-parser')
var cookieParser  = require('cookie-parser')
var logger        = require('morgan')
var next          = require('next')

//Environment Variables
require('env2')('secrets.env')

/*
    Connect to DB
*/
//if(process.env.NODE_ENV = 'test')
  //change to testing database
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL).then(
  ()  => {console.log("Database is connected")},
  err => {console.log("Can not connect to the database" + err)}
)

/*
  Express configuration
*/
const app = express()

//static files
app.use(express.static("app/public"))

//middleware
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieSession({
  name: 'mevn-todo-session',
  secret : process.env.SESSION_SECRET
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(logger('dev'))

//api router
var apiRouter = require("./router")
app.use("/api", apiRouter)

//prevent caching of nuxt files
app.use((req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidat')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  next()
})

/*
  Next
*/
var nextDev = (process.env.NODE_ENV !== 'production')
var nextApp = next({ dev: nextDev })
var nextHandler = nextApp.getRequestHandler()

app.use(nextHandler)

////Error handling goes last
var handleErrors = require("./router/middleware/handleErrors.js")
app.use(handleErrors)

//App level passport config
var configPassport = require('./configPassport')
configPassport()

/*
  Start listening
*/
var port = process.env.PORT || 3000

nextApp.prepare().then(() => {
  module.exports = app.listen(port, function() {
    console.log("Listening on port " + port)
  })
})
