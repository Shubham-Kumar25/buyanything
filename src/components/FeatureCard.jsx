import React from "react";

const FeatureCard = () => {
  return (
    <section className="text-gray-600  body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-purple-500 title-font">
            EXPLORE OUR FEATURES
          </h2>
          <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Why Choose BuyAnything
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-purple-500 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  Fast Shipping
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  We offer lightning-fast shipping to get your products to you
                  as quickly as possible.
                </p>
                <a className="inline-flex items-center mt-3 text-purple-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-purple-500 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  Secure Transactions
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  Shop with confidence. We prioritize the security of your
                  transactions and personal information.
                </p>
                <a className="inline-flex items-center mt-3 text-purple-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-purple-500 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  24/7 Customer Support
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  We are here to assist you around the clock. Contact our
                  dedicated support team anytime you need help.
                </p>
                <a className="inline-flex items-center mt-3 text-purple-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
