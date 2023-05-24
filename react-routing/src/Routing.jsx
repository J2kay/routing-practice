import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="About" element={<About />} />
      <Route path="Contacts" element={<Contact />} />
      <Route path="Services" element={<Services />} />
      <Route path="/Services/:id" element={<ServiceDetails />} />
    </Routes>
  );
};

export default Routing;
