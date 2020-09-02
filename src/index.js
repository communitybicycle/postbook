import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider>
        <ColorModeProvider>
          <CSSReset />
          <App />
        </ColorModeProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
