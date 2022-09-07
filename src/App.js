import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import Contact from "./pages/contact/contact.component";
import Home from "./pages/home/home.component";
import Opportunities from "./pages/opportunities/opportunities.component";
import Solution from "./pages/solution/solution.component";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/opportunities" element={<Opportunities />} />
        <Route exact path="/solutions" element={<Solution />} />
        <Route exact path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
