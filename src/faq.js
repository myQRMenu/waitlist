import { useState } from "react";

const faqs = [
  {
    question: "What is My QRMenu?",
    answer:
      "My QRMenu is a digital menu platform that allows restaurants to create, update, and share their menus instantly using QR codes.",
  },
  {
    question: "Can I update my menu after creating it?",
    answer:
      "Yes, you can update your menu anytime and it will reflect instantly when customers scan your QR code.",
  },
  {
    question: "How does My QRMenu work?",
    answer:
      "You create a menu, generate a QR code, and customers can scan it to view the latest version of your menu.",
  },
  {
    question: "How do I share my QR code?",
    answer:
      "You can share the QR code digitally or print it for display in your restaurant.",
  },
  {
    question: "Is My QRMenu mobile-friendly?",
    answer:
      "Yes, My QRMenu is optimized for all devices, including mobile phones and tablets.",
  },
  {
    question: "Can I collect customer reviews?",
    answer:
      "Yes, you can enable customer reviews and use the feedback to improve your offerings.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          You've got questions. <br />
          We've got answers.
        </h2>
        <p className="text-gray-500 text-center mt-4">
          Everything you need to know about the product.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center py-4">
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <button className="text-orange-500">
                  {openIndex === index ? (
                    <span className="text-xl">−</span>
                  ) : (
                    <span className="text-xl">+</span>
                  )}
                </button>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <div className="pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
