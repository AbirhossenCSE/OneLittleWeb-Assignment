// components/Footer.js

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12">
          
          {/* Left Column - Logo + Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-4xl font-bold text-blue-600">G</div>
              <div className="text-4xl font-bold text-red-500">o</div>
              <div className="text-4xl font-bold text-yellow-500">o</div>
              <div className="text-4xl font-bold text-blue-600">g</div>
              <div className="text-4xl font-bold text-green-500">l</div>
              <div className="text-4xl font-bold text-red-500">e</div>
            </div>
            
            <p className="text-gray-600 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. 
              Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                𝕏
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                f
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                📷
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                ○
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-5">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-pink-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Works</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-5">Help</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Delivery Details</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-gray-900 mb-5">Resources</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Free eBooks</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Development Tutorial</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">How to - Blog</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="mt-20 bg-[#1E0342] py-6">
        <div className="max-w-6xl text-white mx-auto px-6 text-center text-gray-700 text-sm">
          © Copyright 2024, All Rights Reserved by XYZ
        </div>
      </div>
    </footer>
  );
}