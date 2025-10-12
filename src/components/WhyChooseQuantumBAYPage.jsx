import React from "react";
import { Bolt, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <Bolt className="w-15 h-15 text-cyan-400 bg-[#0C2D47] p-[15px] rounded-[12px]" />
    ),
    title: "All-in-One Solution",
    text: "No need to depend on multiple service providers. We bring technology, security, and marketing together in one place.",
  },
  {
    icon: (
      <Target className="w-15 h-15 text-cyan-400 bg-[#0C2D47] p-[15px] rounded-[12px]" />
    ),
    title: "Tailored for Everyone",
    text: "Whether you're a street vendor looking to accept online payments or a corporate exploring AI and blockchain, we provide solutions tailored to your needs.",
  },
  {
    icon: (
      <Users className="w-15 h-15 text-cyan-400 bg-[#0C2D47] p-[15px] rounded-[12px]" />
    ),
    title: "Simplified Digital Transition",
    text: "QuantumBAY makes digital transition simple, safe, and affordable for everyone—from small vendors to large companies.",
  },
];

const WhyChooseQuantumBAY = () => {
  return (
    <div className="bg-[#050b17] min-h-screen flex flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-3 text-center">
        Why Choose QuantumBAY
      </h1>
      <p className="text-gray-300 mb-12 text-center text-lg">
        Your trusted partner for digital excellence
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#0c2d47] p-8 rounded-2xl shadow-lg border border-transparent transition-all duration-300 transform hover:-translate-y-3 hover:shadow-cyan-500/40 hover:border-cyan-400 hover:bg-[#103b5d] group"
          >
            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex justify-center mb-6"
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors duration-300">
              {card.title}
            </h2>

            {/* Text */}
            <p className="text-gray-300 text-center leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom text */}
      <div className="bg-[#0c2d47] mt-16 p-8 rounded-2xl max-w-5xl w-full text-center border border-cyan-700">
        <p className="text-gray-300 text-[22px]">
          Let's grow your business with technology that works—whether you're
          just starting or already established.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseQuantumBAY;
