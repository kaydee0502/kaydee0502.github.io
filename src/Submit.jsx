import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "./Store";
import { setData } from "./Store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    verbValue: state.verbValue,
    optionValue: state.optionValue,
  };
};

const Submit = (props) => {
  const [apidata, setApidata] = useState([]);
  const getData = async () => {
    const response = await fetch(
      "http://localhost:8000/datum/prepare_loadout?verb=GET&option=about_me",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    setApidata(res);
  };

  useEffect(() => {
    dispatch(setData(apidata.payload));
  }, [apidata]);

  const dispatch = useDispatch();
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
