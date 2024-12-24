"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How are OrbGenix developers different?",
      answer:
        "Figma ipsum component variant main layer. Object opacity edit rotate component. Editor list variant fill team project editor. Selection edit object follower bold. Clip pencil shadow invite subtract. Comment effect layer figma link library image prototype.",
    },
    {
      question: "How are OrbGenix developers different?",
      answer:
        "Figma ipsum component variant main layer. Object opacity edit rotate component. Editor list variant fill team project editor. Selection edit object follower bold. Clip pencil shadow invite subtract. Comment effect layer figma link library image prototype.",
    },
    {
      question: "How are OrbGenix developers different?",
      answer:
        "Figma ipsum component variant main layer. Object opacity edit rotate component. Editor list variant fill team project editor. Selection edit object follower bold. Clip pencil shadow invite subtract. Comment effect layer figma link library image prototype.",
    },
  ];

  return (
    <div className=" w-[912px] mx-auto  text-white my-16 p-4 ">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-semibold uppercase mb-4">FAQ</h2>
        <h1 className="text-[48px] font-bold mb-8">
          Find answers about our services, processes, pricing, and more
        </h1>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg cursor-pointer ${
              activeIndex === index ? "bg-brand" : "bg-brand hover:bg-brand"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className=" text-[23px] font-semibold">{faq.question}</h3>
              <span className="text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-[16px] text-gray-200">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
