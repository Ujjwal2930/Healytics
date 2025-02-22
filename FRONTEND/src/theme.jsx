import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#14E1DA", // Healytics primary color (blue)
    },
    secondary: {
      main: "#f50057", // Accent color (pink)
    },
    background: {
      default: "#f5f5f5", // Light background
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h3: {
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.1rem",
    },
  },
});

export default theme;
