"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    { question: "What services do you offer?", answer: "We provide high-end hearse transportation services across Kenya." },
    { question: "How do I book a hearse?", answer: "You can book online through our website or contact us directly via phone or WhatsApp." },
    { question: "Do you offer long-distance transportation?", answer: "Yes, we provide nationwide hearse transportation services." },
    { question: "What are your pricing options?", answer: "Our pricing depends on distance and vehicle type. Contact us for a quote." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Frequently Asked Questions</h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`w-6 h-6 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;