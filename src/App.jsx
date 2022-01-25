import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Ground from "./Ground";
import { useDispatch } from "react-redux";
import { setVerb } from "./Store";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-gray-900 md:p-20 sm:p-10 h-screen flex items-start flex-col">
        <h1 className="text-5xl text-white">XitiZ</h1>
        <p className="text-gray-400 mt-5 text-lg">
          Hi Devs, my name is Kshitij Dhama, a Software Developer who loves
          problem solving and spending hours on obvious bugs xD
        </p>
        <div className="w-full flex justify-center my-5">
          <div className="w-11/12">
            <Ground />
          </div>
        </div>
        <button
          onClick={() => {
            console.log("lmao");
          }}
          className="p-3 bg-green-600 rounded-lg text-white mt-5 hover:bg-gray-600"
        >
          Hello Friends 🚀
        </button>
      </div>
    </>
  );
}

export default App;
