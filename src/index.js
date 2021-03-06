import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./components/react-context-api/StateProvider";
import reducer, { initialState } from "./components/react-context-api/reducer";

ReactDOM.render(
  <React.StrictMode>
    {/* Wrapping the app inside the provider to setup the data layer */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
