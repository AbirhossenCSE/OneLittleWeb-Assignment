import { services } from '@/data/services';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-pink-600">Service</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-pink-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Read More Button */}
              <button className="border border-pink-500 text-pink-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-pink-50 transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}