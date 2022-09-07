import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/opportunities" element={Opportunities} />
        <Route exact path="/solutions" element={Solutions} />
        <Route exact path="/contact-us" element={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
    </div>
  );
}

export default App;
