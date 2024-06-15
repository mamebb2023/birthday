import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Birthday from "./components/Birthday";
import Cake from "./components/Cake";
import Sorry from "./components/Sorry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/sorry" element={<Sorry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
