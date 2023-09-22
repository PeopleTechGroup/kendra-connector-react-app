import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { common } from "@material-ui/core/colors";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import BrandonTextWebRegular from "./assets/fonts/brandon-text-regular.woff";
import { CssBaseline } from "@material-ui/core";

const brandonText = {
  fontFamily: "Brandon Text",
  src: `
    url(${BrandonTextWebRegular}) format('woff')
  `,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Brandon Text, Arial",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [brandonText],
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: common.white,
      },
    },
    MuiDrawer: {
      paperAnchorLeft: {
        width: "320px",
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter basename="/">
        <CssBaseline />
        <App />
      </BrowserRouter>
    </React.StrictMode>
    ,
  </MuiThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
