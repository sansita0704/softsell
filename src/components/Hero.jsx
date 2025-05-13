import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="hero bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100 h-screen flex items-center justify-center">
            <div className="text-center">
                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to SoftSell
                </motion.h1>
                <motion.p
                    className="mb-6 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    Sell your software licenses quickly and easily.
                </motion.p>
                <motion.button
                    className="bg-blue-500 dark:bg-blue-700 px-6 py-3 rounded-full text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 150 }}
                >
                    Get a Quote
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
