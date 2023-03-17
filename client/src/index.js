import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

import App from "./App";
import "./index.css";

// Rendering App
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
