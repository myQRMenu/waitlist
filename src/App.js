import { useState, useEffect } from "react";
import "./App.css";
import logo from './assets/Logo.png';
import bg from './assets/bg.png';
import phone from './assets/phone.png';
import phonewithbg from './assets/phonewithbg.png';
import icon from './assets/icon.png';
import icon2 from './assets/icon2.png';
import icon4 from './assets/icon4.png';
import icon6 from './assets/icon6.png';
import icon7 from './assets/icon7.png';
import icon8 from './assets/icon8.png';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const menuItems = ["Home", "About Us", "FAQ", "Contact"];

  return (
    <div className="bg-white overflow-x-hidden">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto flex items-center px-6 py-4">
          <img src={logo} alt="QR Menu" className="h-10" />

          <div className="hidden md:flex items-center space-x-8 justify-center flex-1">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setActiveLink(item)}
                className={`font-medium transition ${activeLink === item
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-orange-500"
                  }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
              Join Waitlist
            </button>
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
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => {
                  setActiveLink(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`transition ${activeLink === item ? "text-orange-500" : "text-white"
                  }`}
              >
                {item}
              </a>
            ))}
            <button
              className="bg-orange-500 px-6 py-3 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Waitlist
            </button>
          </div>
        )}
      </header>

      <main className="bg-white px-2 md:px-4">
        <section
          className="bg-gray-900 text-center pt-20 md:pt-28 rounded-3xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Menu Management, Made Effortless!
            </h1>
            <p className="text-gray-300 mt-4 text-lg md:text-xl">
              Create, update, and share your menu instantly with QR codes.
            </p>
            <button className="mt-8 bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition">
              Join Waitlist
            </button>
          </div>

          <div className="mt-12 relative max-w-3xl mx-auto px-4 h-[500px] overflow-hidden">
            <img
              src={phone}
              alt="Phone Mockup"
              className="mx-auto object-contain object-top w-full h-[600px] md:h-[650px] translate-y-20 md:translate-y-32 scale-100 md:scale-125 transition-all duration-300"
            />
          </div>
        </section>
      </main>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Our Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card */}
            {[
              {
                icon: icon,
                title: "Create and Upload Menu",
                description:
                  "Easily create and upload your menu in just a few clicks! Add items, set prices, and update details effortlessly no technical skills needed.",
                bgColor: "bg-yellow-100",
              },
              {
                icon: icon8,
                title: "Update Menu",
                description:
                  "Make real-time updates to your menu anytime, anywhere! Change prices, add new meals or archive unavailable meals instantly no reprints needed.",
                bgColor: "bg-pink-100",
              },
              {
                icon: icon4,
                title: "Generate and Share",
                description:
                  "Generate a unique QR code for your menu instantly! Share it on tables, posters, or online, allowing customers to scan and access your latest menu with ease.",
                bgColor: "bg-purple-100",
              },
            ].map((service) => (
              <div key={service.title}
                className="bg-white rounded-xl border border-gray-200 p-6">
                <div className={`bg-pink-100 rounded-lg inline-block p-3 ${service.bgColor}`}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Amazing Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-left">
            Explore Our Amazing Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="space-y-8">
              {[
                { title: "Manage Menu", icon: icon, color: "bg-blue-100", description: "Manage your menu anytime! Add, edit, or remove items with ease keeping your offerings fresh and up to date for your customers." },
                { title: "Insight & Reports", icon: icon6, color: "bg-purple-100", description: "Gain valuable insights with real-time reports! Track menu views, QR code scans, and customer interactions for your restaurant." },
                { title: "Share QR Codes", icon: icon8, color: "bg-pink-100", description: "Share your menu with a unique QR code! Display it on tables, posters, or online, allowing customers to scan and access your latest menu instantly." },
                { title: "Clients Reviews", icon: icon, color: "bg-yellow-100", description: "Showcase customer feedback with real reviews and ratings! Build trust, improve your menu, and enhance the dining experience with valuable insights." },
                { title: "Offers & Discounts", icon: icon7, color: "bg-green-100", description: "Boost sales with special offers and discounts! Highlight promotions, limited-time deals, and exclusive discounts to attract and retain more customers." },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${feature.color}`}>
                    <img src={feature.icon} alt={feature.title} className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-500 rounded-2xl flex justify-center items-center overflow-hidden">
              <img src={phonewithbg} alt="App Screenshot" className="max-w-full h-auto object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
