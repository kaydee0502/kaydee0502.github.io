import React from "react";
import Verb from "./Verb";
import Endpoint from "./Endpoint";

const Ground = () => {
  return (
    <div className="p-5 bg-gray-700 rounded-lg">
      The know about
      <div className="h-0.5 w-full bg-gray-600"></div>
      <div className="w-3/4">
        <Verb></Verb>
        <Endpoint></Endpoint>
      </div>
    </div>
  );
};

export default Ground;
