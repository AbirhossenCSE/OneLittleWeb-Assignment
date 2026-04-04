import Image from 'next/image';

const tools = [
  {
    id: 1,
    name: "PriceLabs",
    image: "/images/tools/pricelabs.png",
  },
  {
    id: 2,
    name: "Wheelhouse",
    image: "/images/tools/wheelhouse.png",
  },
  {
    id: 3,
    name: "Beyond Pricing",
    image: "/images/tools/beyond-pricing.png",
  },
  {
    id: 4,
    name: "Hostfully",
    image: "/images/tools/hostfully.png",
  },
  {
    id: 5,
    name: "Guesty",
    image: "/images/tools/guesty.png",
    subtitle: "For Hosts",
  },
  {
    id: 6,
    name: "LODGIFY",
    image: "/images/tools/lodgify.png",
  },
  {
    id: 7,
    name: "Hostfully",
    image: "/images/tools/hostfully.png",
  },
  {
    id: 8,
    name: "Guesty",
    image: "/images/tools/guesty.png",
    subtitle: "For Hosts",
  },
  {
    id: 9,
    name: "LODGIFY",
    image: "/images/tools/lodgify.png",
  },
];

export default function OurTools() {
  return (
    <div className="py-20 bg-white">
      <div className=" mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-pink-600">Tools</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Light Gray Background Container */}
        <div className="bg-[#F6F6F6] rounded-3xl py-16 px-8">
          {/* Tools Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center h-40 shadow-sm hover:shadow-md transition-all duration-300 group border border-transparent hover:border-gray-100"
              >
                <div className="transition-transform group-hover:scale-110">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={150}
                    height={65}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}