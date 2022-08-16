import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import CustomizedApp from "./CustomizedApp";
import UIKitFrame from "./UIKitFrame";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<UIKitFrame />}></Route>
          <Route path="/uikit" element={<CustomizedApp />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
