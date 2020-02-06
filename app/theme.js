import { createMuiTheme } from '@material-ui/core/';
const shadowOpacity = 0.4;

const shadowColor = `${Math.round(255 * (1 - shadowOpacity))},`.repeat(3);

const baseTheme = createMuiTheme({
  typography: {
    fontFamily: '"Poppins","Roboto", "Helvetica", "Arial", sans-serif;',
  },
});
const lightTheme = createMuiTheme({
  ...baseTheme,
  shadows: baseTheme.shadows.map(s => s.replace(/0.0.0,/gi, shadowColor)),
});

export default lightTheme;
