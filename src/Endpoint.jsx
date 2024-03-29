/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { store } from "./Store";
import { setOption } from "./Store";
import { connect } from "react-redux";

const options = {
  GET: [
    {
      id: 1,
      value: "About Kshitij!",
      slug: "about_me",
    },
    {
      id: 2,
      value: "Skills",
      slug: "skills",
    },
    {
      id: 3,
      value: "Education",
      slug: "education",
    },
    {
      id: 4,
      value: "Experience",
      slug: "experience",
    },
    {
      id: 5,
      value: "Projects",
      slug: "projects",
    },
  ],
  POST: [
    {
      id: 1,
      value: "This is POST",
    },
  ],
  PUT: [
    {
      id: 1,
      value: "This is PUT",
    },
  ],
  DELETE: [
    {
      id: 1,
      value: "This is DELETE",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const mapStateToProps = (state) => {
  return {
    verbValue: state.verbValue,
  };
};

function Endpoint(props) {
  const selectedVerb = store.getState();
  // console.log(selectedVerb);
  const [selected, setSelected] = useState(options[selectedVerb.verbValue][0]);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelected(options[props.verbValue][0]);
  }, [props.verbValue]);

  useEffect(() => {
    dispatch(setOption(selected));
    console.log(props);
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 relative py-2 md:w-4/6 md:inline-block">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 md:rounded-r-md sm:rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.value}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {options[selectedVerb.verbValue].map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {option.value}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default connect(mapStateToProps)(Endpoint);
