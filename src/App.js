import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
// import Blog from "./Components/Blog/Blog";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <NavBar />
        {/*
          A <Switch> -> now <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/blog" element={<Blog />}></Route> */}
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
