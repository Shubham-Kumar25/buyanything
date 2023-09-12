import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 shadow-lg body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link
          to="/"
          className="flex items-center mb-4 font-medium text-gray-900 cursor-pointer title-font md:mb-0"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 p-1 text-white bg-purple-500 rounded-full"
          >
            <image className="w-full h-full" href="../src/img/logo.png" />
          </svg>
          <span className="ml-3 text-xl">BuyAnything</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button className="inline-flex items-center px-4 py-2 mt-4 text-base text-white bg-purple-500 border-0 rounded hover:bg-purple-700 focus:outline-none hover:bg-gray-200 md:mt-0">
          Go to Cart
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
