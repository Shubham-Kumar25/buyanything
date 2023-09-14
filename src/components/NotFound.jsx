import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="h-64 w-96">
        <img
          className="object-cover w-full h-full"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1688845900~exp=1688846500~hmac=f8ecb740a68df94203a46ab0028f5a7103c1c32e828f645082127127cf176510"
          alt="404 Error"
        />
      </div>
      <h1 className="text-4xl text-gray-900">
        You've landed on the wrong page. Please go to the Homepage.
      </h1>
      <Link
        to="/"
        className="flex items-center justify-center px-6 py-2 mt-4 text-white bg-purple-500 border-0 rounded hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-400"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
