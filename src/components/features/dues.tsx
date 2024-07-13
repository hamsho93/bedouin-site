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
      <div className="w-full max-w-2xl mx-auto">
        <Accordion className="bg-gray-800 text-white border border-gray-700 rounded-lg">
          <AccordionItem key="1" aria-label="Accordion 1" title={
            <div className="flex items-center">
              <FaQuestionCircle className="mr-2" />
              Is contract insurance right for my agency?
            </div>
          }>
            As a healthcare staffing agency, it&aposs important to prioritize the needs of your travel nurses and ensure
             their satisfaction. One way to achieve this is by embedding contract cancellation insurance in your contracts. 
             By having contract insurance in place, your agency can provide assurance to your travel healthcare workers that they will be 
             reimbursed for pre paid expenses such as housing, flights and car rentals even if their contract is unexpectedly cancelled. 
             This can lead to a reduction in travel healthcare workers churn, as healthcare workers are more likely to remain loyal to an agency that values their 
             well-being and financial security. Ultimately, having contract insurance in place can increase the satisfaction of your travel healthcare workers, 
             improve the reputation of your agency, and help you attract and retain top talent in the competitive healthcare staffing industry.
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