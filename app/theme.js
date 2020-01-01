import { createMuiTheme } from '@material-ui/core/';
const shadowOpacity = 0.2;

const shadowColor = `${Math.round(255 * (1 - shadowOpacity))},`.repeat(3);

const baseTheme = createMuiTheme({});
const lightTheme = createMuiTheme({
  shadows: baseTheme.shadows.map(s => s.replace(/0.0.0,/gi, shadowColor)),
});

export default lightTheme;
