// src/components/DigitalIndia.jsx
import React from "react";
import { Bolt, Target } from "lucide-react";

const DigitalIndia = () => {
    return (
        <div className="bg-[#0b1a2a] min-h-screen flex flex-col items-center justify-center p-6">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12 text-center">
                Why It Matters in India Right Now
            </h1>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
                {/* Digital Revolution */}
                <div className="bg-[#0c2d47] p-6 rounded-xl shadow-lg flex flex-col gap-4 border border-cyan-700">
                    <div className="flex gap-[10px] items-center">
                        <Bolt className="w-12 h-12 text-cyan-400" />
                        <h2 className="text-2xl font-semibold text-cyan-400">
                            Digital Revolution
                        </h2>
                    </div>

                    <p className="text-gray-300">
                        India is going digital at record speed with UPI payments, online
                        shopping, and AI adoption becoming everyday needs.
                    </p>
                </div>

                {/* Business Risk */}
                <div className="bg-[#2c1a1a] p-6 rounded-xl shadow-lg flex flex-col gap-4 border border-red-600">
                    
                    <div className="flex gap-[10px] items-center">
                        <Target className="w-12 h-12 text-red-400" />
                          <h2 className="text-2xl font-semibold text-red-400">Business Risk</h2>
                    </div>
                  
                    <p className="text-gray-300">
                        Businesses that do not go digital risk being left behind in India's
                        rapidly evolving market.
                    </p>
                </div>
            </div>

            {/* Solution */}
            <div className="bg-[#0c2d47] p-8 mt-12 rounded-xl shadow-lg w-full max-w-4xl text-center border border-cyan-700">
                <h2 className="text-3xl font-semibold text-cyan-400 mb-4">Our Solution</h2>
                <p className="text-gray-300 text-lg">
                    QuantumBAY makes digital transition simple, safe, and affordable for
                    everyone—from small vendors to large companies.
                </p>
            </div>
        </div>
    );
};

export default DigitalIndia;
