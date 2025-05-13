import { motion } from "framer-motion";

const reasons = [
    "Fast & Easy Process",
    "Top Valuations",
    "Secure Transactions",
    "Trusted by 1,000+ Users",
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 px-4">
            <motion.h3
                className="text-2xl font-bold text-center mb-10"
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
                        className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                    >
                        <h4 className="font-semibold">{reason}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
