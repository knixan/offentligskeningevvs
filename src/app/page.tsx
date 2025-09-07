import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-900">
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
