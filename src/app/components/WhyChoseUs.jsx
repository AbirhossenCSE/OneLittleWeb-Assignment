import Image from 'next/image';
import { 
  FaUserPlus, 
  FaUsers, 
  FaHeadset 
} from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Getting Started Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Getting Started is <span className="text-pink-600">Easy</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Three Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Step 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 border-4 border-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-pink-600">
                01
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full">
              <div className="flex justify-center mb-6 text-5xl text-gray-700">
                <FaUserPlus />
              </div>
              <h3 className="font-semibold text-gray-700 text-xl mb-3">Add requirements<br />& sign up today</h3>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 border-4 border-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-pink-600">
                02
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full">
              <div className="flex justify-center mb-6 text-5xl text-gray-700">
                <FaUsers />
              </div>
              <h3 className="font-semibold text-gray-700  text-xl mb-3">Connect with your CSM &<br />onboarding team</h3>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 border-4 border-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-pink-600">
                03
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full">
              <div className="flex justify-center mb-6 text-5xl text-pink-600">
                <FaHeadset />
              </div>
              <h3 className="text-gray-700 font-semibold text-xl mb-3">Meet your STR<br />Assistant next week</h3>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#FDEBF0] rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                Few Reasons Why you<br />Choose us?
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-pink-500 text-xl">✔</span>
                  Brilliant Client Service
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-pink-500 text-xl">✔</span>
                  Flexibility & Adaptibility
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-pink-500 text-xl">✔</span>
                  We make it Personal
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-pink-500 text-xl">✔</span>
                  We have expert in our team
                </li>
              </ul>

              <button className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-2xl font-medium flex items-center gap-2 transition-colors">
                Schedule A Meeting
                <span>→</span>
              </button>
            </div>

            {/* Right Side - Image + Elements */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Man Image */}
              <div className="relative z-10 top-2 right-28">
                <Image 
                  src="/images/man.png"
                  alt="Happy Man"
                  width={280}
                  height={380}
                  className="rounded-3xl object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-18 right-52 bg-white p-4 rounded-2xl shadow-lg z-1">
                <Image 
                  src="/images/room-review.png"   // Change later
                  alt="Room Review"
                  width={180}
                  height={100}
                  className="rounded-xl"
                />
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-500 mt-1">$75/night</p>
              </div>

              {/* Calendar */}
              <div className="absolute -bottom-6 -left-18 bg-white p-4 rounded-2xl shadow-lg">
                <div className="text-xs text-center mb-2 font-medium">March 2026</div>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {Array.from({ length: 31 }, (_, i) => (
                    <div 
                      key={i} 
                      className={`w-6 h-6 flex items-center justify-center rounded ${i === 10 || i === 15 || i === 20 ? 'bg-pink-500 text-white' : 'text-gray-600'}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Logo Cluster */}
              <div className="absolute top-1/3 -right-6 bg-white rounded-3xl shadow-xl">
                  <Image src="/images/Group.png" alt="Airbnb" width={150} height={150} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}