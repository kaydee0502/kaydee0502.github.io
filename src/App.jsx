import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Ground from "./Ground";
import { useDispatch } from "react-redux";
import { setVerb } from "./Store";
import { Provider } from "react-redux";
import { store } from "./Store";
import Result from "./Result";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <Provider store={store}>
      <>
        <div className="bg-gray-900 md:p-20 sm:p-10 flex items-start flex-col h-screen overflow-auto">
          <h1 className="text-5xl text-white">XitiZ</h1>
          <div className="w-full flex justify-center my-5">
            <div className="w-full">
              <Ground />
              <Result />
            </div>
          </div>
        </div>
      </>
    </Provider>
  );
}

export default App;
