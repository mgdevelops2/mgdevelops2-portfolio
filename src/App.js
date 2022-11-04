import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// This site holds the pages you add, all of which are rendered
// dynamically in the browser (not server rendered).
//
// this means that, although the page does not ever refresh, the
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
// think of a stack of links - data structure.

// lets import all the necessary components below
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
// import Blog from "./Components/Blog/Blog";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      {/* main div */}
      <div>
        {/* add your componenet that will always show on the page - Nav or footer */}
        <NavBar />
        {/*
          <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        {/* anything in here will be what displays on the main body - 
        essentially it will connect to your corresponding linked page internal 
        or external */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/blog" element={<Blog />}></Route> */}
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>

        {/* Adding Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
