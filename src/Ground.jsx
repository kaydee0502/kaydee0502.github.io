import React from "react";
import Verb from "./Verb";
import Endpoint from "./Endpoint";
import Submit from "./Submit";
import "./prism.css";

const Ground = () => {
  return (
    <div className="p-5 bg-gray-700 rounded-t-lg">
      <div className="w-full">
        <Verb></Verb>
        <Endpoint></Endpoint>
        <Submit></Submit>
      </div>
    </div>
  );
};

export default Ground;
