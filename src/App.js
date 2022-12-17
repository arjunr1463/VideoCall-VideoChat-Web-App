import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Room from "./components/room";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
