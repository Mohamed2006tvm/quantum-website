// src/components/WhatWeDo.jsx
import React from "react";
import { Globe, Shield, TrendingUp, Bot, Blocks, Currency, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
const services = [
    {
        icon: (
            <Globe className="w-[60px] h-[60px] bg-[#0C2D47] p-[15px] rounded-[12px] text-cyan-400 " />
        ),
        title: "Web & Mobile Apps",
        description:
            "Building websites and mobile apps that take shops, services, and ideas online.",
    },
    {
        icon: (
            <Shield className="w-[60px] h-[60px] bg-[#0C2D47] p-[15px] rounded-[12px] text-cyan-400 " />
        ),
        title: "Cybersecurity",
        description:
            "Strengthening security with advanced cybersecurity solutions for safe operations.",
    },
    {
        icon: (
            <TrendingUp className="w-[60px] h-[60px] bg-[#0C2D47] p-[15px] rounded-[12px] text-cyan-400 " />
        ),
        title: "Digital Marketing",
        description:
            "Helping businesses reach more customers with digital marketing and content strategies.",
    },
    {
        icon: (
            <Bot className="w-[60px] h-[60px] bg-[#0C2D47] p-[15px] rounded-[12px] text-cyan-400 " />
        ),
        title: "AI & Chatbots",
        description:
            "Developing AI tools that make businesses smarter and customer service faster.",
    },
    {
        icon: (
            <Blocks className="w-[60px] h-[60px] bg-[#0C2D47] p-[15px] rounded-[12px] text-cyan-400 " />
        ),
        title: "Blockchain",
        description:
            "Enabling safe and transparent operations through blockchain technology and smart contracts.",
    },
    {
        icon: (
            <DollarSign className="w-[60px] h-[60px] bg-[#0C2D47] p-[15px] rounded-[12px] text-cyan-400 " />
        ),
        title: "Financial Technology",
        description:
            "Guiding organizations in using technology to manage and grow their finances.",
    },
];

export default function WhatWeDo() {
    return (
        <section className="bg-[#050b17] text-white py-22">
            <div className="text-center mb-12">
                <h2 className="text-[43px] font-bold text-cyan-400">What We Do</h2>
                <p className="text-gray-400 mt-3">
                    Comprehensive digital solutions for modern businesses
                </p>
            </div>

            {/* Scrollable card container */}
            <div className="relative max-w-7xl mx-auto px-6">
                <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-6 px-2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="min-w-[320px] sm:min-w-[360px] bg-[#0b1429] rounded-2xl p-8 flex flex-col justify-between border border-gray-800 hover:border-cyan-400 transition-all duration-300"
                        >
                            <motion.div
                                animate={{ y: [0, 11, 0], scale: [1] }}o
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-2xl font-bold mt-6 mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Optional hint text */}
                <p className="text-center text-gray-500 text-sm mt-4">
                    ⬅️ Drag or scroll horizontally ➡️
                </p>
            </div>
        </section>
    );
}
