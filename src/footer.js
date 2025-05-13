import facebookIcon from '../src/assets/facebookLogo.svg';
import linkedinIcon from '../src/assets/linkedinIcon (2).svg';
import instagramIcon from '../src/assets/instagramLogo.svg';
import twitterIcon from '../src/assets/twitterIcon (2).svg';

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
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <p classNmae="text-white text-[21px]">Connect with us</p>
          <div className="flex flex-row gap-4">
            <a href="https://www.facebook.com/share/1Z7nz5uFmK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/myqrmenu_?igsh=MXFxYmgzOTA4M3h6ag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="cursor-pointer" />
            </a>
          </div>
          
        </div>

        {/* Bottom Links */}
        <div className="mt-12 w-full flex justify-between items-center text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition">
            Terms & Agreements
          </a>
          <span>©2025 All rights reserved</span>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
