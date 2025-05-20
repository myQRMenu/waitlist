import { useState, useEffect } from "react";
import ScreenContainer from "../components/screen";

export default function PrivacyPolicy() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/privacyPolicy.html")
      .then((res) => res.text())
      .then((data) => setHtml(data));
  }, []);

  return (
    <ScreenContainer>
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Privacy Policy
          </h2>

        <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </ScreenContainer>
  );
}
