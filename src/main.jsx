import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
import { store } from "./store";
import { MasculinidadApp } from "./MasculinidadApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <Analytics />
      <MasculinidadApp />
  </Provider>
);
