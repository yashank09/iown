import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: { main: "#f83566" },
    secondary: { main: "#4460AE" }
  },
  typography: {
    fontSize: 16,
    fontFamily: "'Lexend Deca', sans-serif",
    h2: {
      fontSize: "3rem"
    },
    h3: {
      fontSize: "2.5rem",
      marginBottom: 56
    }
  }
});
