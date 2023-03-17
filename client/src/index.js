import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";

// Redux Store
const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

// Rendering App
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
