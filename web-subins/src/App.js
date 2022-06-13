import React from "react";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import Blog from "./Pages/Blog";
import News from "./Pages/News";
import Faq from "./Pages/Faq";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Discount from "./Pages/Discount";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <Router>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/discount" element={<Discount />} />
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
