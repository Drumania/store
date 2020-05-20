import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="App">Hello World</div>
      <Footer />
    </>
  );
}

export default App;
