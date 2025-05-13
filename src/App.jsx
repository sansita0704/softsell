import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    // Effect to add/remove dark class on body or html
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div>
            {/* Button to toggle dark mode */}
            <button
                className="p-2 bg-gray-800 text-white rounded fixed top-4 right-4 z-50"
                onClick={() => setDarkMode(!darkMode)}
            >
                Toggle Dark Mode
            </button>

            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />
        </div>
    );
}

export default App;
