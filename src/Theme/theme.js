import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#0747A6",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
