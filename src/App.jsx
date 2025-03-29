import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="overflow-hidden bg-very-light-gray">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
