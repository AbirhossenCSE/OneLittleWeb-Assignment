"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Jenny Wilson",
    image: "/images/clients/jenny.png",     // Change later
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: 2,
    name: "Esther Howard",
    image: "/images/clients/esther.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: 3,
    name: "Robert Fox",
    image: "/images/clients/robert.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(1); // Middle card starts as active

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Check Our Clients <span className="text-pink-600">Review</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative flex justify-center gap-6 overflow-hidden">
          {testimonials.map((testimonial, index) => {
            const isCenter = index === currentIndex;
            const isLeft = index === (currentIndex - 1 + testimonials.length) % testimonials.length;
            const isRight = index === (currentIndex + 1) % testimonials.length;

            return (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ease-in-out flex-shrink-0 w-full max-w-md 
                  ${isCenter 
                    ? 'bg-white scale-105 shadow-2xl z-20' 
                    : 'bg-[#F6F6F6] scale-95 opacity-75 z-10'
                  } 
                  rounded-3xl p-8`}
                style={{
                  transform: isCenter 
                    ? 'scale(1.05)' 
                    : isLeft 
                      ? 'translateX(-30px) scale(0.92)' 
                      : 'translateX(30px) scale(0.92)'
                }}
              >
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-full overflow-hidden border-4 ${isCenter ? 'border-pink-400' : 'border-gray-200'}`}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-center font-semibold text-2xl text-gray-900 mb-2">
                  {testimonial.name}
                </h3>

                {/* Review Text */}
                <p className="text-gray-600 text-center leading-relaxed mb-6 min-h-[100px]">
                  {testimonial.review}
                </p>

                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-pink-600 w-8' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}