import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '##DE4B4B',
    },
    secondary: {
      main: '#C9C9C9',
    },
    error: {
      main: '#EB5757',
    },
    background: {
      default: '#F7F7F7',
    },
  },
})

export default theme
