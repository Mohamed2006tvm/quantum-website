// src/components/ContactSection.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
    return (

        <div>
            <section className="bg-[#0b1a2a] text-center text-white py-[100px] relative">
                {/* Main Text */}
                <h2 className="text-[42px] font-bold text-cyan-400 leading-[56px] mb-[20px]">
                    Ready to Transform Your Business?
                </h2>

                {/* Subtext */}
                <p className="text-[#C3C8CC] text-[20px] mb-[50px]">
                    Get in touch with us today and let's discuss how we can help you succeed in the digital age
                </p>

                {/* Contact Button */}
                <div className="flex justify-center">
                    <a
                        href="mailto:info.quantumbay@gmail.com"
                        className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[18px] font-semibold px-[50px] py-[18px] rounded-[50px] shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        info.quantumbay@gmail.com
                        <ArrowRight size={24} />
                    </a>
                </div>
            </section>
            {/* Footer */}
            <div className="absolute bg-[#030B17] p-[25px]  left-0 right-0 text-center text-[#9BA3AF] text-[15px]">
                © 2025 QuantumBAY All rights reserved.
            </div>

        </div>
    );
};

export default ContactSection;
