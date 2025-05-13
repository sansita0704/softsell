import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
    return (
        <section className="how-it-works py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="container mx-auto text-center px-4">
                <motion.h2
                    className="text-4xl font-semibold mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    How It Works
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-3">
                            Upload License
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Submit your license details securely.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-3">
                            Get Valuation
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            We provide instant valuation estimates.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold mb-3">Get Paid</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Receive payment through your preferred method.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
