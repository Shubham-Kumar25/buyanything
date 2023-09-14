const Contact = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-3xl font-bold text-black">Contact Us</h2>

      <section className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-black">Get in Touch</h3>
        <p className="text-gray-700">
          We'd love to hear from you! If you have any questions, feedback, or
          concerns, please don't hesitate to contact us using the form below.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-black">
          Contact Information
        </h3>
        <ul className="pl-6 text-gray-700 list-disc">
          <li>Email: contact@buyanything.com</li>
          <li>Phone: +123-456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-black">Contact Form</h3>
        <form>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="email"
              id="email"
              placeholder="Your email address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full h-32 px-3 py-2 border rounded-lg resize-none"
              id="message"
              placeholder="Your message"
            />
          </div>
          <button
            className="px-4 py-2 font-bold text-white bg-purple-500 rounded-lg hover:bg-purple-700"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
