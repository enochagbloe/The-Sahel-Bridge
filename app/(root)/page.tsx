import React from "react";
import Hero from "../Components/Hero";
import ProductsSection from "../Components/ProductSection";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import AboutFounders from "../Components/About";
const page = () => {
  return (
    <main>
      <Hero />
      <ProductsSection />
      <AboutFounders />
      <CTA />
      <Footer />
    </main>
  );
};

export default page;
