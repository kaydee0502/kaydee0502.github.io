import React from "react";
import { useDispatch } from "react-redux";
import { store } from "./Store";
import { setOption } from "./Store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    verbValue: state.verbValue,
    optionValue: state.optionValue,
  };
};

const getData = async () => {
  const response = await fetch("http://localhost:8000/datum");
  return await response.json();
};

const Submit = (props) => {
  return (
    <div className="mt-1 relative py-2 md:w-1/6 md:inline-block md:px-2">
      <button
        onClick={() => {
          console.log(getData());
        }}
        className="bg-green-600 border border-green-500 rounded-lg text-white hover:bg-gray-600 w-full shadow-sm py-2 cursor-default text-sm focus:ring-1"
      >
        Send
      </button>
    </div>
  );
};

export default connect(mapStateToProps)(Submit);
