import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="w-full mb-10 lg:max-w-lg lg:w-1/2 md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src="../src/img/heroimg.jpg"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 md:items-start md:text-left">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            Discover the Best Deals
            <br className="hidden lg:inline-block" /> on BuyAnything
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
            Find amazing products at unbeatable prices. From fashion to
            electronics, we have got it all. Join the BuyAnything community
            today!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-purple-500 border-0 rounded focus:outline-none hover:bg-purple-700">
              Shop Now
            </button>
            <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
