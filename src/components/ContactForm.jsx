import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
    return (
        <section className="contact-form py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-4xl font-semibold mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Contact Us
                </motion.h2>

                <motion.form
                    className="space-y-4 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800"
                    />
                    <div className="mb-4">
                        <select
                            id="service"
                            name="service"
                            className="w-full rounded-md border border-gray-300 p-2 dark:bg-gray-800 dark:border-gray-600"
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="web">Web Development</option>
                            <option value="app">App Development</option>
                            <option value="uiux">UI/UX Design</option>
                            <option value="seo">SEO Services</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full rounded-md border border-gray-300 p-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                        placeholder="Your message (min 10 characters)"
                        required
                        minLength={10}
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 dark:bg-blue-700 text-white py-3 px-6 rounded"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactForm;
