import { TbLoader3 } from "react-icons/Tb";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <TbLoader3 className="text-6xl animate-spin text-primary-default" />
    </div>
  );
}

export default Loading;
