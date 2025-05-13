import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
    return (
        <section className="testimonials py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="container mx-auto text-center px-4">
                <motion.h2
                    className="text-4xl font-semibold mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    What Our Customers Say
                </motion.h2>

                <motion.div
                    className="flex flex-col md:flex-row justify-center gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="testimonial p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-md mx-auto">
                        <p className="text-gray-800 dark:text-gray-300">
                            "Great service! Highly recommend."
                            <br />– John Smith
                        </p>
                    </div>
                    <div className="testimonial p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-md mx-auto">
                        <p className="text-gray-800 dark:text-gray-300">
                            "Easy to use and effective!"
                            <br />– Jenny
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
