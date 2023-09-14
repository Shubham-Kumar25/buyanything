import { FaSpinner } from "react-icons/fa";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <FaSpinner className="text-6xl text-purple-500 animate-spin" />
    </div>
  );
}

export default Loading;
