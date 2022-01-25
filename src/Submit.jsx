import React from "react";

const Submit = () => {
  return (
    <div className="mt-1 relative py-2 md:w-1/6 md:inline-block md:px-2">
      <button
        onClick={() => {
          console.log("lmao");
        }}
        className="bg-green-600 border border-green-500 rounded-lg text-white hover:bg-gray-600 w-full shadow-sm py-2 cursor-default text-sm focus:ring-1"
      >
        Send
      </button>
    </div>
  );
};

export default Submit;
