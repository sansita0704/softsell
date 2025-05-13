import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
    return (
        <section className="how-it-works py-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-4xl font-semibold mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    How It Works
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Add your steps here */}
                    <div className="p-4 border border-gray-300 dark:border-gray-600 rounded">
                        <h3 className="text-2xl mb-4">Upload License</h3>
                        <p>Submit your license details securely.</p>
                    </div>
                    <div className="p-4 border border-gray-300 dark:border-gray-600 rounded">
                        <h3 className="text-2xl mb-4">Get Valuation</h3>
                        <p>We provide instant valuation estimates.</p>
                    </div>
                    <div className="p-4 border border-gray-300 dark:border-gray-600 rounded">
                        <h3 className="text-2xl mb-4">Get Paid</h3>
                        <p>Receive payment through your preferred method.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
