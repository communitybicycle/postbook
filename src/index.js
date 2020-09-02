import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider>
        <CSSReset />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
