"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
        style={{
          backgroundImage: "url('/images/hero-Image.png')",
          transform: `translateY(${scrollY * 0.5}px) scale(${
            1 + scrollY * 0.0005
          })`,
        }}
      />

      {/* Animated overlay with opacity change */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-300"
        style={{
          opacity: Math.min(0.5 + scrollY * 0.001, 0.8),
        }}
      />

      {/* Animated content that moves differently than background */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-transform duration-75"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: Math.max(1 - scrollY * 0.002, 0),
        }}
      >
        {/* Main heading */}
        <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Welcome to
          <span className="block text-green-400"> The Sahel Bridge</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          Exporting Africa’s Finest Agricultural Commodities
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-green-600 text-white hover:bg-green-700 transition">
            Explore Products
          </Button>
          <Button className="bg-white text-green-700 border border-green-600 hover:bg-green-100 transition">
            Learn Our Story
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
