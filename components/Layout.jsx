import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';


const Layout = ({children, userAgent}) => {
  var muiContext = {}
  if (userAgent)
    muiContext.userAgent = userAgent

  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: green100,
    },
  }, muiContext);

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        {children}
      </div>
    </MuiThemeProvider>
  )
}


export default Layout
