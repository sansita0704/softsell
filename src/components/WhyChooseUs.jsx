import { motion } from "framer-motion";

const reasons = [
    "Fast & Easy Process",
    "Top Valuations",
    "Secure Transactions",
    "Trusted by 1,000+ Users",
];

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6 dark:text-white">
            <motion.h3
                className="text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Why Choose Us
            </motion.h3>

            <div className="grid md:grid-cols-4 gap-6 text-center">
                {reasons.map((reason, idx) => (
                    <motion.div
                        key={idx}
                        className="p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg rounded-lg text-gray-900 dark:text-white transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                    >
                        <h4 className="text-lg font-medium">{reason}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
