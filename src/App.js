import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import "./styles.css";
import PhoneView from "./component/PhoneView";

function App() {
  return (
    <div className="card">
      <div className="data">
        <PhoneView />
      </div>
    </div>
  );
}

export default App;
