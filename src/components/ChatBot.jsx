import { useState } from "react";

const presetQAs = {
    "How do I sell my license?":
        "Just upload your license, get valuation, and receive payment!",
    "Is this secure?":
        "Yes, we ensure end-to-end encrypted and verified transactions.",
};

export default function ChatBot() {
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState("");
    const [response, setResponse] = useState("");

    const handleSend = () => {
        setResponse(presetQAs[msg] || "Sorry, I didn’t get that.");
    };

    return (
        <div className="fixed bottom-4 right-4">
            {show ? (
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md w-64">
                    <input
                        type="text"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder="Ask a question..."
                        className="w-full p-2 border rounded"
                    />
                    <button
                        onClick={handleSend}
                        className="bg-blue-500 text-white w-full mt-2 py-1 rounded"
                    >
                        Send
                    </button>
                    <p className="mt-2 text-sm">{response}</p>
                </div>
            ) : null}
            <button
                onClick={() => setShow(!show)}
                className="mt-2 p-2 rounded-full bg-blue-600 text-white"
            >
                💬
            </button>
        </div>
    );
}
