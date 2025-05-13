export default function Navbar() {
    return (
        <nav className="p-4 shadow-md flex justify-between items-center">
            <h1 className="text-2xl font-bold">SoftSell</h1>
            <button
                onClick={() =>
                    document.documentElement.classList.toggle("dark")
                }
                className="border px-3 py-1 rounded"
            >
                Toggle Mode
            </button>
        </nav>
    );
}
