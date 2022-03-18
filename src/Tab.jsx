import React from "react";
import "./prism.css";

const Tab = (props) => {
  console.log(props);
  return (
    <div className="p-3 hover:bg-zinc-700 bg-neutral-800 rounded-b w-1/4 md:inline-block text-gray-500">
      {props.label}
    </div>
  );
};

export default Tab;
