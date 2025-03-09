import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // global css
import App from "./App.jsx"; // component

createRoot(document.getElementById("root")).render(
  <Fragment>
    <App />
  </Fragment>
);

// JSX => JavaScript XML
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML.
// JSX is used to describe what the UI should look like.
