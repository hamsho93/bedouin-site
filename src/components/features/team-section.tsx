"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icons } from "@/components/icons";

interface ExpertiseItem {
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

export const TeamSection: React.FC = () => {
  const expertise: ExpertiseItem[] = [
    {
      icon: "brain",
      title: "Tech Innovation",
      description: "AI specialists building secure, scalable healthcare solutions.",
    },
    {
      icon: "stethoscope",
      title: "Healthcare Expertise",
      description: "Experienced pharmacists and healthcare professionals who understand pharmacy operations.",
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333333]">
            Where <span className="text-[#289c8e]">Tech</span> meets <span className="text-[#289c8e]">Health</span>
          </h2>
          <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
            Our team combines technological innovation with healthcare expertise
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/team.png"
                alt="Our Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#289c8e]/10 to-transparent" />
            </div>
          </motion.div>

          {/* Expertise Section */}
          <div className="w-full md:w-1/2 space-y-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#289c8e]/10 flex items-center justify-center">
                  {React.createElement(Icons[item.icon], {
                    className: "w-6 h-6 text-[#289c8e]"
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#333333]">
                    {item.title}
                  </h3>
                  <p className="text-[#333333]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};