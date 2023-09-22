import { RouterProvider } from "react-router-dom";
import route from "./route/route";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme/theme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RouterProvider router={route} />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
