"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MeetOurFounders = [
  {
    name: "Abdul Karim",
    title: "Co-Founder | Head of Operations & Supply Chain",
    description:
      "Abdul leads the sourcing, packaging, and delivery arm of the business. With a hands-on approach and deep-rooted networks across Ghana, Togo, Benin, and Côte d'Ivoire, he ensures that every commodity—whether Shea, Cashew, or Soya Bean—is procured ethically, packaged to specification, and shipped on time. He oversees field operations, quality control, warehousing, and export logistics.",
    contact: "+233 532471240",
    email: "abdul@pureafricanharvest.com",
    specialties: ["Supply Chain", "Quality Control", "Export Logistics"],
    image: "/images/abdul-karim.jpg", // Add your image path here
    imageAlt: "Abdul Karim - Co-Founder and Head of Operations"
  },
  {
    name: "Rya G. Kuewor",
    title: "Co-Founder | Head of Business Development & Commercial Affairs",
    description:
      "Rya directs customer acquisition, marketing, and all commercial operations. He manages client relationships, negotiates contracts, and handles the documentation and compliance processes required for international trade. His work ensures that every buyer receives not only a premium product but also a reliable and professional transactional experience.",
    contact: "+233 532471240",
    email: "rya@pureafricanharvest.com",
    specialties: [
      "Business Development",
      "Client Relations",
      "International Trade",
    ],
    image: "/images/rya-kuewor.jpg", // Add your image path here
    imageAlt: "Rya G. Kuewor - Co-Founder and Head of Business Development"
  },
];

const AboutFounders = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(MeetOurFounders.length).fill(false)
  );
  const [headerVisible, setHeaderVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState<boolean[]>(
    new Array(MeetOurFounders.length).fill(false)
  );
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Handle header visibility
          if (entry.target === headerRef.current) {
            setHeaderVisible(entry.isIntersecting);
          }

          // Check each card and reset/trigger animations
          cardsRef.current.forEach((cardRef, index) => {
            if (entry.target === cardRef) {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const newVisible = [...prev];
                    newVisible[index] = true;
                    return newVisible;
                  });
                }, index * 200); // Stagger animation by 200ms per card
              } else {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = false;
                  return newVisible;
                });
              }
            }
          });
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe each card
    cardsRef.current.forEach((cardRef) => {
      if (cardRef) observer.observe(cardRef);
    });

    return () => observer.disconnect();
  }, []);

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-earth-50 to-sage-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-earth-800 mb-6">
            Meet Our Founders
          </h2>
          <p className="text-lg text-earth-600 max-w-3xl mx-auto leading-relaxed">
            The visionary leaders behind Pure African Harvest, combining
            expertise in business development and supply chain operations to
            bring you the finest agricultural products from Africa.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {MeetOurFounders.map((founder, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group transition-all duration-700 ease-out ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : `opacity-0 ${
                      index % 2 === 0 ? "-translate-x-16" : "translate-x-16"
                    } translate-y-8 scale-95`
              }`}
            >
              {/* Contact Card */}
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-earth-100 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
                </div>

                {/* Header Section */}
                <div className="relative bg-gradient-to-r from-sage-600 to-earth-600 p-8 text-white">
                  {/* Profile Image or Avatar */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:border-white/40">
                    {!imageErrors[index] && founder.image ? (
                      <Image
                        src={founder.image}
                        alt={founder.imageAlt || founder.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={() => handleImageError(index)}
                        priority={index < 2} // Prioritize loading for first 2 images
                      />
                    ) : (
                      // Fallback to initials if image fails or doesn't exist
                      <div className="w-full h-full bg-white/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {founder.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-2 transition-transform duration-300 group-hover:translate-x-2">
                    {founder.name}
                  </h3>
                  <p className="text-sage-100 font-medium text-sm leading-relaxed">
                    {founder.title}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-6 right-6 w-16 h-16 border-2 border-white/20 rounded-full transition-transform duration-500 group-hover:rotate-45"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                  {/* Description */}
                  <p className="text-earth-600 leading-relaxed text-sm">
                    {founder.description}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-earth-800 text-sm">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-xs font-medium transition-colors duration-300 hover:bg-sage-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4 pt-4 border-t border-earth-100">
                    {/* Phone */}
                    <div className="flex items-center space-x-3 group/contact">
                      <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center transition-colors duration-300 group-hover/contact:bg-sage-200">
                        <svg
                          className="w-5 h-5 text-sage-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-earth-500 font-medium">
                          Phone
                        </p>
                        <a
                          href={`tel:${founder.contact}`}
                          className="text-earth-800 font-semibold hover:text-sage-600 transition-colors"
                        >
                          {founder.contact}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-3 group/contact">
                      <div className="w-10 h-10 bg-earth-100 rounded-full flex items-center justify-center transition-colors duration-300 group-hover/contact:bg-earth-200">
                        <svg
                          className="w-5 h-5 text-earth-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-earth-500 font-medium">
                          Email
                        </p>
                        <a
                          href={`mailto:${founder.email}`}
                          className="text-earth-800 font-semibold hover:text-sage-600 transition-colors"
                        >
                          {founder.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-6 bg-gradient-to-r from-sage-600 to-earth-600 hover:from-sage-700 hover:to-earth-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Get In Touch
                  </button>
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 -left-4 w-8 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1000 group-hover:translate-x-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFounders;