import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Host from "./pages/Host";

function App() {
  return (
    <Router>
      <div className="container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Host" element={<Host />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
