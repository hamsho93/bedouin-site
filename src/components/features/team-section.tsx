"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

interface ExpertiseItem {
  icon: keyof typeof Icons;
  title: string;
  description: string;
  animation: {
    y?: number[];
    rotate?: number[];
    scale?: number[];
    x?: number[];
    transition: {
      duration: number;
      repeat: number;
    };
  };
}

export const TeamSection: React.FC = () => {
  const expertise: ExpertiseItem[] = [
    {
      icon: "pill",
      title: "AI Experts",
      description: "Our AI specialists bring decades of experience in machine learning and healthcare automation.",
      animation: {
        y: [0, -10, 0],
        transition: { duration: 2, repeat: Infinity }
      }
    },
    {
      icon: "stethoscope",
      title: "Pharmacy Veterans",
      description: "Seasoned pharmacists and pharmacy operators who understand the daily challenges of modern pharmacies.",
      animation: {
        rotate: [0, 10, -10, 0],
        transition: { duration: 3, repeat: Infinity }
      }
    },
    {
      icon: "analytics",
      title: "Healthcare Innovators",
      description: "Forward-thinking healthcare professionals dedicated to revolutionizing patient care.",
      animation: {
        scale: [1, 1.1, 1],
        transition: { duration: 2.5, repeat: Infinity }
      }
    },
    {
      icon: "shield",
      title: "Tech Pioneers",
      description: "Software engineers with deep expertise in building secure, scalable healthcare solutions.",
      animation: {
        x: [-5, 5, -5],
        transition: { duration: 2.8, repeat: Infinity }
      }
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#289c8e]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Animated Line */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-[#289c8e] absolute top-0 left-1/2 -translate-x-1/2"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4 text-[#333333] pt-8"
          >
            Our <span className="text-[#289c8e]">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#333333] max-w-2xl mx-auto"
          >
            Combining pharmaceutical knowledge with cutting-edge technology
          </motion.p>
        </div>

        {/* Expertise Cards in Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expertise.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative overflow-hidden rounded-xl backdrop-blur-lg p-8 
                ${index % 2 === 0 ? 'md:translate-y-12' : ''} 
                bg-gradient-to-br from-white/10 to-white/5 
                border border-[#289c8e]/20 hover:border-[#289c8e]/40 
                transition-all duration-300 hover:shadow-lg hover:shadow-[#289c8e]/5`}
            >
              {/* Icon with Glow Effect */}
              <motion.div 
                animate={item.animation}
                className="text-[#289c8e] mb-6 relative"
              >
                <div className="absolute inset-0 bg-[#289c8e]/20 blur-xl rounded-full" />
                <Icons.pill className="w-12 h-12 relative z-10" />
              </motion.div>

              <h3 className="text-2xl font-semibold mb-3 text-[#333333]">
                {item.title}
              </h3>
              <p className="text-[#333333]/80">
                {item.description}
              </p>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#289c8e]/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#289c8e]/5 rounded-full blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section with Animated Counter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: "20+", label: "Years Combined Experience" },
            { value: "15+", label: "AI & Technology Patents" },
            { value: "24/7", label: "Dedicated Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#289c8e]/10 to-transparent 
                border border-[#289c8e]/20 rounded-xl p-8 text-center
                hover:shadow-lg hover:shadow-[#289c8e]/5 transition-all duration-300"
            >
              <h4 className="text-4xl font-bold text-[#289c8e] mb-2">{stat.value}</h4>
              <p className="text-[#333333]/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};