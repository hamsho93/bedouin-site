"use client"; // Ensures the code runs on the client side

import React from "react";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { motion } from "framer-motion";

export const Dues = () => {
  const leftSide = {
    name: "Pharmacy",
    description: "Your Pharmacy"
  };

  const rightSide = {
    name: "Patient",
    description: "Your Patients"
  };

  return (
    <>
      {/* Integration Diagram Section */}
      <section className="flex flex-col items-center py-12 md:py-24 bg-[#f8f9fa] rounded-[32px] md:rounded-[64px]">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold mb-8 md:mb-16 tracking-tight"
          >
            <span className="text-[#333333]">A</span>{" "}
            <span className="text-[#289c8e]">Seamless</span>{" "}
            <span className="text-[#333333]">Partnership</span>{" "}
          </motion.h2>

          <div className="relative flex flex-col md:flex-row justify-center items-center min-h-[600px] md:min-h-[400px] mb-16 md:mb-32">
            {/* Left Side - Pharmacy */}
            <div className="md:absolute relative mb-8 md:mb-0 md:-left-4 lg:left-20 md:top-1/2 md:-translate-y-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[24px] md:rounded-[32px] shadow-lg p-4 md:p-6 w-32 md:w-40 h-32 md:h-40 flex flex-col items-center justify-center relative group"
              >
                <Icons.store className="w-8 md:w-12 h-8 md:h-12 text-[#289c8e] mb-2 md:mb-4" />
                <span className="text-sm md:text-base text-[#289c8e] font-medium text-center">{leftSide.description}</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hidden md:block absolute left-full top-1/2 w-[100px] h-[2px] origin-left bg-gradient-to-r from-[#289c8e] to-transparent"
                />
              </motion.div>
            </div>

            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 bg-[#289c8e] rounded-[24px] md:rounded-[32px] shadow-xl p-6 md:p-8 w-32 md:w-40 h-32 md:h-40 flex items-center justify-center mb-8 md:mb-0"
            >
              <Image
                src="/pharmacy_875x875.png"
                alt="PillHub"
                width={72}
                height={72}
                className="object-contain md:w-24 md:h-24"
              />
            </motion.div>

            {/* Right Side - Patient */}
            <div className="md:absolute relative mb-8 md:mb-0 md:-right-4 lg:right-20 md:top-1/2 md:-translate-y-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[24px] md:rounded-[32px] shadow-lg p-4 md:p-6 w-32 md:w-40 h-32 md:h-40 flex flex-col items-center justify-center relative group"
              >
                <Icons.user className="w-8 md:w-12 h-8 md:h-12 text-[#289c8e] mb-2 md:mb-4" />
                <span className="text-sm md:text-base text-[#289c8e] font-medium text-center">{rightSide.description}</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hidden md:block absolute right-full top-1/2 w-[100px] h-[2px] origin-right bg-gradient-to-l from-[#289c8e] to-transparent"
                />
              </motion.div>
            </div>

            {/* AI Section */}
            <div className="md:absolute relative md:left-1/2 md:-translate-x-1/2 md:top-[calc(50%+160px)]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[24px] md:rounded-[32px] shadow-lg p-4 md:p-6 w-32 md:w-40 h-32 md:h-40 flex flex-col items-center justify-center relative"
              >
                <Icons.brain className="w-8 md:w-12 h-8 md:h-12 text-[#289c8e] mb-2 md:mb-4" />
                <span className="text-sm md:text-base text-[#289c8e] font-medium text-center">AI</span>
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hidden md:block absolute -top-20 left-1/2 -translate-x-1/2 w-[2px] h-20 origin-bottom bg-gradient-to-t from-[#289c8e] to-transparent"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Features Section */}
      <section className="flex flex-col items-center py-24">
        <div className="max-w-6xl mx-auto text-center px-4">
          {/* Main Headings */}
          <h2 className="text-5xl font-bold mb-4 text-[#333333]">
          Pharmacies are the backbone of our local community healthcare and our mission is to supercharge them!
          </h2>
          {/* <h2 className="text-5xl font-bold mb-8 text-[#289c8e]">
            Redefine the future of healthcare.
          </h2> */}
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Feature 1 */}
            <div className="bg-white/5 border border-[#289c8e]/20 backdrop-blur-lg rounded-xl p-8 shadow-lg">
              <div className="text-[#289c8e] mb-6">
                <Icons.pill2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#333333]">
                Revenue Cycle Management
              </h3>
              <p className="text-[#333333]">
              Utilize PillHub to consolidate disparate data feeds and identify real-time financial opportunities that might otherwise be missed. Benefit from a centralized platform that includes historical data for lookback analytics and auditing purposes with AI-recommendations
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 border border-[#289c8e]/20 backdrop-blur-lg rounded-xl p-8 shadow-lg">
              <div className="text-[#289c8e] mb-6">
                <Icons.stethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#333333]">
                Patient Care Profiles
              </h3>
              <p className="text-[#333333]">
                Maintain comprehensive patient profiles with medication history, allergies, and personalized care recommendations.
              </p>
            </div>

            {/* Feature 3 - Updated */}
            <div className="bg-white/5 border border-[#289c8e]/20 backdrop-blur-lg rounded-xl p-8 shadow-lg">
              <div className="text-[#289c8e] mb-6">
                <Icons.car className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#333333]">
                Logistical Excellence
              </h3>
              <p className="text-[#333333]">
              PillHub&apos;s intelligent scheduling and logistics platform ensures timely deliveries and pickups, eliminating abandoned medications and maximizing pharmacy efficiency.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 border border-[#289c8e]/20 backdrop-blur-lg rounded-xl p-8 shadow-lg">
              <div className="text-[#289c8e] mb-6">
                <Icons.shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#333333]">
                Compliance & Safety
              </h3>
              <p className="text-[#333333]">
                Built-in compliance checks and drug interaction monitoring for enhanced patient safety.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};