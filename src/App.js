import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Pages/Navbar";
import Home from "./Pages/Homescreen";

// function handleClick() {
//   // Your code here
// }

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          {/* <button onClick={handleClick}>Click me</button> */}

        </div>
      </Router>
    </div>
  );
}

export default App;
