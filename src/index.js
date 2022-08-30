import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reducer } from "./components/reducers/index";
import { createStore } from "redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
