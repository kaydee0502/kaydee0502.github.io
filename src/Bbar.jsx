import React from "react";
import "./prism.css";
import Tab from "./Tab";

const Bbar = (props) => {
  return (
    <div>
      {props.tabs.map((e) => {
        return <Tab key={e.id} label={e.value} />;
      })}
    </div>
  );
};

export default Bbar;
