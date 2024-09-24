import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Footer />
      <Navbar />
    </div>
  );
}

export default Home;
