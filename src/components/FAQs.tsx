"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use state-of-the-art encryption and follow industry-standard compliance to keep your data protected.",
  },
];

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-xl mx-auto">
          Everything you need to know about our product and services.
        </p>

     
        <div className="mt-14 space-y-4">
          {items.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={question}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 cursor-pointer
                           hover:bg-white/10 transition-all
                           hover:border-white hover:border-dotted"
              >
                {/* Question Row */}
                <div className="w-full flex justify-between items-center">
                  <span className="font-semibold text-lg">{question}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl font-bold text-purple-400"
                  >
                    +
                  </motion.span>
                </div>

         
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
