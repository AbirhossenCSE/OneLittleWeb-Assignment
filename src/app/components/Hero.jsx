// components/Hero.tsx

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center pt-20 pb-16">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:150px_150px]" />

      {/* Main Content - No white box, no border */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        
        {/* Decorative Dots */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full"></div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>

        {/* Floating Logos */}
        <div className="absolute -top-12 -left-12 md:-left-20">
          <Image 
            src="/images/ref1/airbnb.png" 
            alt="Airbnb" 
            width={85} 
            height={85} 
            className="rotate-[-12deg] drop-shadow-md"
          />
        </div>

        <div className="absolute -top-12 -right-12 md:-right-20">
          <Image 
            src="/images/ref1/b-logo.png" 
            alt="B Logo" 
            width={85} 
            height={85} 
            className="rotate-[8deg] drop-shadow-md"
          />
        </div>

        <div className="absolute -bottom-12 -left-12 md:-left-20">
          <Image 
            src="/images/ref1/v-logo.png" 
            alt="V Logo" 
            width={85} 
            height={85} 
            className="rotate-[-10deg] drop-shadow-md"
          />
        </div>

        <div className="absolute -bottom-12 -right-12 md:-right-20">
          <Image 
            src="/images/ref1/chatgpt-logo.png" 
            alt="ChatGPT Logo" 
            width={85} 
            height={85} 
            className="rotate-[12deg] drop-shadow-md"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Airbnb Assistants For<br />
          Property Management
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center gap-5">
          <button className="bg-[#FF5A5F] hover:bg-[#FF4449] text-white font-semibold px-12 py-4 rounded-2xl text-lg transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl">
            Schedule A Meeting
            <span className="text-2xl leading-none">→</span>
          </button>

          <a href="#pricing" className="text-gray-500 hover:text-gray-700 underline underline-offset-4 text-base">
            See Pricing
          </a>
        </div>

        {/* Trust Signal */}
        <div className="mt-20 flex flex-col items-center gap-3">
          <div className="bg-blue-600 text-white text-sm font-semibold px-8 py-2 rounded-full inline-block">
            923 × 523
          </div>
          <p className="text-gray-600 font-medium text-lg">
            Trusted by leaders in <span className="font-semibold text-gray-800">50+</span> industries
          </p>
        </div>
      </div>

      {/* Small floating decorative dots */}
      <div className="absolute top-32 left-12 w-3 h-3 bg-blue-500 rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-2 h-2 bg-red-400 rounded-full"></div>
      <div className="absolute top-1/3 right-32 w-2 h-2 bg-yellow-400 rounded-full"></div>
      <div className="absolute bottom-1/3 left-40 w-3 h-3 bg-teal-400 rounded-full"></div>
    </div>
  );
}