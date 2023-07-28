import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TermsCopyright from "./components/TermsCopyright";


function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="skills" element={<Skills />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/termsCopyright" element={<TermsCopyright/>}/>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
