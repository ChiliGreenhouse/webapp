import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Regulation from "./pages/Regulation";
import Camera from "./pages/Camera";
import Data from "./pages/Data";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/regulation" element={<Regulation />} />
          <Route path="/camera" element={<Camera />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
