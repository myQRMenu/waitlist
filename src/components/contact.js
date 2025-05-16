
export default function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const accessKey = process.env.REACT_APP_ACCESS_KEY;

    formData.append("access_key",accessKey );
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      form.reset();
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
        {/* Left Side - Map */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.0508352033503!2d-0.1373624617803413!3d51.50425124663128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b28e2e69f1f%3A0x5e7ff2721f6f9b33!2sLondon%2C%20United%20Kingdom!5e0!3m2!1sen!2sus!4v1640580873409!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-500 mt-2">
            Our friendly team would love to hear from you.
          </p>

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  First name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-orange-400 focus:border-orange-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Last name
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-orange-400 focus:border-orange-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-orange-400 focus:border-orange-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-orange-400 focus:border-orange-400 transition"
              ></textarea>
            </div>

            {/* Privacy and Consent */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
              />
              <span className="text-sm text-gray-600">
                You agree to our friendly{" "}
                <a
                  href="https://myqrmenu.co"
                  className="text-orange-500 underline hover:text-orange-600"
                >
                  privacy policy
                </a>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
