import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/output.css";
import Ground from "./Ground";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-900 p-20 h-screen flex items-start flex-col">
        <h1 className="text-5xl text-white">XitiZ</h1>
        <p className="text-gray-400 mt-5 text-lg">
          Hi Devs, my name is Kshitij Dhama, a Software Developer who loves
          problem solving and spending hours on obvious bugs xD
        </p>
        <div class="w-full flex justify-center my-5">
          <div class="w-11/12">
            <Ground />
          </div>
        </div>
        <button class="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
          Hello Friends 🚀
        </button>
      </div>
    </>
  );
}

export default App;
