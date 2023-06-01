import React from "react";
import ReactDOM from "react-dom/client";

const parent = ReactDOM.createRoot(document.getElementById("parent"));
const child = <h1>Linked.</h1>;
parent.render(child);
