import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "boxicons";

import Home from "./components/Home";
import Birthday from "./components/Birthday";
import Cake from "./components/Cake";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/cake" element={<Cake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
