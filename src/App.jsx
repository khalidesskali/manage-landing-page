import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="overflow-hidden bg-very-light-gray">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default App;
