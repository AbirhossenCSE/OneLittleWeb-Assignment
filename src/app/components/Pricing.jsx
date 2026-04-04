import { pricingPlans } from "@/data/pricing";


export default function Pricing() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Airbnb Assistant <span className="text-pink-600">pricing</span>
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Choose a plan that's right for you
          </p>
        </div>

        {/* Toggle (Monthly / Yearly) */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="text-gray-700 font-medium">Pay Monthly</span>
          
          <div className="relative w-12 h-6 bg-gray-300 rounded-full cursor-pointer">
            <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow"></div>
          </div>

          <span className="text-gray-700 font-medium">Pay Yearly</span>
          
          <span className="text-pink-600 font-medium ml-2 flex items-center gap-1">
            Save 25%
            <span className="text-xl">↗</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 border transition-all duration-300 ${
                plan.isPopular 
                  ? 'border-pink-500 bg-pink-600 text-white shadow-2xl scale-105' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {/* Plan Name */}
              <h3 className={`text-2xl font-semibold mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                {plan.plan}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-8 ${plan.isPopular ? 'text-pink-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-5xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  ${plan.price}
                </span>
                <span className={`text-base ${plan.isPopular ? 'text-pink-100' : 'text-gray-500'}`}>
                  / Month
                </span>
              </div>

              {/* Button */}
              <button
                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all mb-10 ${
                  plan.isPopular 
                    ? 'bg-white text-pink-600 hover:bg-gray-100' 
                    : 'border-2 border-pink-500 text-pink-600 hover:bg-pink-50'
                }`}
              >
                {plan.buttonText}
              </button>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {feature.available ? (
                      <span className={`mt-1 text-xl ${plan.isPopular ? 'text-white' : 'text-pink-500'}`}>
                        ✓
                      </span>
                    ) : (
                      <span className="mt-1 text-xl text-gray-300">✕</span>
                    )}
                    <span className={`text-base ${feature.available ? '' : 'line-through opacity-60'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}