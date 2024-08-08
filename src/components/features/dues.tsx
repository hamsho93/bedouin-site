"use client"; // Ensures the code runs on the client side

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaQuestionCircle } from "react-icons/fa";

export const Dues = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="flex flex-col items-center py-12 bg-black text-white border-4 border-white">
      <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
        FAQs
      </h2>
      <div className="w-full max-w-2xl mx-auto mb-4"> {/* Add margin-bottom here */}
        <Accordion className="bg-gray-800 text-white border border-gray-700 rounded-lg">
          <AccordionItem key="1" aria-label="Accordion 1" title={
            <div className="flex items-center">
              <FaQuestionCircle className="mr-2" />
              What industries can benefit from AI Fraud Agents?
            </div>
          }>
            Industries such as banking, lending, property management, e-commerce, and fintech can benefit from 
            Lloyd AI Fraud Agents for their ability to detect and manage risks related to fraud, compliance, and other operational concerns.
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <Accordion className="bg-gray-800 text-white border border-gray-700 rounded-lg">
          <AccordionItem key="1" aria-label="Accordion 1" title={
            <div className="flex items-center">
              <FaQuestionCircle className="mr-2" />
              What support does Lloyd AI offer for businesses using AI Fraud Agents?
            </div>
          }>
            Lloyd AI offers support through customer service, training, and
            consultation to help businesses integrate AI Fraud Agents effectively and achieve the best results in risk assessment and management.
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h3 className="text-2xl font-bold text-center mb-4">
          Backed by
        </h3>
        <div className="flex gap-10 justify-center items-center">
          <img src="plugandplay.png" alt="PnP Logo" className="h-12 md:h-16 transition-transform duration-300 hover:scale-105" />
          <img src="berkeley.png" alt="Berkeley Logo" className="h-20 md:h-20 transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </section>
  );
};