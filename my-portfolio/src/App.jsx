import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
