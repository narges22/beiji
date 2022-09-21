import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#e3d3c2",
    },
    secondary: {
      main: "#363634",
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
