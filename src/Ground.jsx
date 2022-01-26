import React from "react";
import Verb from "./Verb";
import Endpoint from "./Endpoint";
import Submit from "./Submit";
import "./prism.css";

const Ground = () => {
  return (
    <div className="p-5 bg-gray-700 rounded-t-lg">
      The know about
      <div className="h-0.5 w-full bg-gray-600"></div>
      <div className="w-full">
        <Verb></Verb>
        <Endpoint></Endpoint>
        <Submit></Submit>
      </div>
    </div>
  );
};

export default Ground;
