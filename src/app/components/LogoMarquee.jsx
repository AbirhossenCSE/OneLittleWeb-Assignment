"use client";
import Image from 'next/image';

const logos = [
  { name: "Airbnb", src: "/images/partners/airbnb.svg" },
  { name: "Booking.com", src: "/images/partners/booking.svg" },
  { name: "Vrbo", src: "/images/partners/vrbo.svg" },
  { name: "Tripadvisor", src: "/images/partners/tripadvisor.svg" },
  { name: "Agoda", src: "/images/partners/agoda.svg" },
  { name: "Expedia", src: "/images/partners/expedia.svg" },
  { name: "HomeToGo", src: "/images/partners/hometogo.svg" },
];

export default function LogoMarquee() {
  return (
    <div className="py-6 bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex items-center">
          
          {/* Marquee Container */}
          <div className="flex animate-marquee whitespace-nowrap gap-16">
            {[...logos, ...logos].map((logo, index) => (   // Duplicate for seamless loop
              <div 
                key={index} 
                className="flex items-center justify-center min-w-[160px] opacity-75 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={50}
                  className="object-contain h-10"
                />
              </div>
            ))}
          </div>

          {/* Gradient Overlays (optional - to fade edges) */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}