import { Link } from "react-router-dom";

const FeatureCard = ({ cards = [1, 2, 3, 4] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-purple-500 title-font">
            EXPLORE OUR PRODUCT CATEGORIES
          </h2>
          <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Discover a Wide Range of Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards?.map((card, index) => {
            return (
              <Link
                to={`/categories/${card}`}
                key={index}
                className="p-4 cursor-pointer md:w-1/3"
              >
                <div className="flex flex-col h-full p-8 transition duration-300 bg-white border border-gray-300 rounded-lg hover:shadow-md">
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
                    <h2 className="text-lg font-medium text-gray-900 uppercase title-font">
                      {card}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="text-base leading-relaxed">
                      Explore our {card.toLowerCase()} products and find what
                      you need.
                    </p>
                    <Link
                      to={`/categories/${card}`}
                      className="inline-flex items-center mt-3 text-purple-500 transition duration-300 hover:text-purple-600"
                    >
                      View Products
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
                    </Link>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
