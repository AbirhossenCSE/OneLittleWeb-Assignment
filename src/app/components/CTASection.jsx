import Image from 'next/image';

export default function CTASection() {
  return (
    <div className="bg-white pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Light Gray Background Box */}
        <div className="bg-[#F9FAFB] rounded-3xl py-16 px-8 text-center">
          
          {/* Team Avatars */}
          <div className="flex justify-center mb-8">
            <div className="flex -space-x-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-4 border-white shadow-sm">
                <Image 
                  src="/images/team/team1.png" 
                  alt="Team Member 1" 
                  width={56} 
                  height={56} 
                  className="object-cover"
                />
              </div>
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-4 border-white shadow-sm">
                <Image 
                  src="/images/team/team2.png" 
                  alt="Team Member 2" 
                  width={56} 
                  height={56} 
                  className="object-cover"
                />
              </div>
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-4 border-white shadow-sm">
                <Image 
                  src="/images/team/team3.png" 
                  alt="Team Member 3" 
                  width={56} 
                  height={56} 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Still have Questions?
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-lg max-w-md mx-auto mb-10">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>

          {/* Button */}
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-10 py-4 rounded-2xl text-lg transition-all duration-200 flex items-center gap-2 mx-auto">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}