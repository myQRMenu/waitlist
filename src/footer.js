import logo from './assets/logo1.png';

export default function FooterCTA() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-4 md:px-0">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Seamless Digital Menus, <br /> Simplified!
        </h2>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="https://form.typeform.com/to/fgpsBEja"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition shadow-md inline-block text-center">
            Join Waitlist
          </a>

        </div>

        {/* Logo */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <img
            src={logo}
            alt="QR Menu"
            className="h-8 w-30"
          /> 
        </div>

        {/* Bottom Links */}
        <div className="mt-12 w-full flex justify-between items-center text-gray-400 text-sm">
          <label className="hover:text-white transition">
            Terms & Agreements
          </label>
          <span>©2025 All rights reserved</span>
          <label className="hover:text-white transition">
            Privacy Policy
          </label>
        </div>
      </div>
    </section>
  );
}
