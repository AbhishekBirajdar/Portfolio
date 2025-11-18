// src/pages/Home.jsx
import React from "react";
import { Hero } from "../components";

const Home = () => {
  return (
    <main className="bg-[#ffefd5] min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center pt-8">
      <div className="w-full">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
