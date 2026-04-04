'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription anytime. There are no long-term contracts. Your access will continue until the end of your current billing period."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional information such as company name, VAT number, or billing address in your account settings before generating an invoice."
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly or yearly depending on your chosen plan. Payments are securely processed via Stripe. You'll receive an invoice via email after each successful payment."
  },
  {
    question: "How do I change my account email?",
    answer: "You can update your account email from the 'Account Settings' page. After changing, you'll need to verify the new email address."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#F9FAFB] rounded-3xl px-8 md:px-12 py-16">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently asked <span className="text-pink-600">questions</span>
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              Everything you need to know about the product and billing.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  <span className={`text-2xl text-pink-500 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}