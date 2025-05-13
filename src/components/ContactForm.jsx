import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
    return (
        <section className="contact-form py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="container mx-auto text-center px-4">
                <motion.h2
                    className="text-4xl font-semibold mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Contact Us
                </motion.h2>

                <motion.form
                    className="space-y-6 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        id="service"
                        name="service"
                        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="app">App Development</option>
                        <option value="uiux">UI/UX Design</option>
                        <option value="seo">SEO Services</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Your message (min 10 characters)"
                        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        minLength={10}
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 px-6 rounded transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactForm;
