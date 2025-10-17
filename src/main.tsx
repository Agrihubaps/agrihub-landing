import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Temp() {
  return <div style={{padding:24}}>It works (Temp)</div>;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Temp />
  </React.StrictMode>
);
