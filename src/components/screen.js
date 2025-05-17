import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import FAQSection from "../faq";
import FooterCTA from "../footer";
import ContactUs from "./contact";
import { Link } from "react-router-dom";

function ScreenContainer({ children }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }, [isMobileMenuOpen]);

    const menuItems = ["Home", "About Us", "FAQ", "Contact"];

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Navbar */}
            <header className="bg-white shadow">
                <nav className="max-w-7xl mx-auto flex items-center px-6 py-4">
                    <Link
                        to="/">
                        <img src={logo} alt="QR Menu" className="h-10" />
                    </Link>

                    <div className="hidden md:flex items-center space-x-8 justify-center flex-1">
                        {menuItems.map((item) => (
                            <label
                                key={item}
                                onClick={() => setActiveLink(item)}
                                className={`font-medium transition ${activeLink === item
                                    ? "text-orange-500"
                                    : "text-gray-600 hover:text-orange-500"
                                    }`}
                            >
                                {item}
                            </label>
                        ))}
                    </div>

                    <div className="hidden md:flex">
                        <a
                            href="https://form.typeform.com/to/fgpsBEja"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition text-center"
                        >
                            Get Early Access
                        </a>
                    </div>

                    <button
                        className="md:hidden ml-auto"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </nav>

                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center text-white text-2xl space-y-8 z-50">
                        <button
                            className="absolute top-6 right-6 text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {menuItems.map((item) => (
                            <label
                                key={item}
                                onClick={() => {
                                    setActiveLink(item);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`transition ${activeLink === item ? "text-orange-500" : "text-white"
                                    }`}
                            >
                                {item}
                            </label>
                        ))}
                        <button className="bg-orange-500 px-6 py-3 rounded-full">
                            Get Early Access
                        </button>
                    </div>
                )}
            </header>

            {/* Page Content */}
            <main>{children}</main>

            {/* Reusable sections */}
            <FAQSection />
            <ContactUs />
            <FooterCTA />
        </div>
    );
}

export default ScreenContainer;
