import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts/Contacts";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/Utils/ScrollToTop";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div id={load ? "preloader" : "preloader-none"} style={{backgroundImage: "url(/img/pre.svg)"}}></div>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
