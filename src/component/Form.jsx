import React, { useContext, useState } from "react";
import { contextdata } from "../context/ContextBar";

function Form() {
  const { dispatch } = useContext(contextdata);
  const [data, setdata] = useState([]);
  const [toggel, settoggel] = useState(false);
  function commonHandel(e) {
    let { value, name } = e.target;
    setdata({ ...data, [name]: value });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "change", payload: data });
  };
  return (
    <div className=" flex justify-center items-center flex-col">
      <input
      className={`mt-5 text-white   focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${toggel?"bg-red-600":"bg-blue-600"}` }
        type="button"
        value={toggel ? "Hide" : "Show"}
        onClick={() => {
          settoggel(!toggel);
        }}
      />
      {toggel ? (
        <form className=" grid grid-rows-3 p-6 m-4 gap-6 mb-6 w-1/3 border ">
         
          <legend>Abc </legend>
          <input
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your Title"
            type="text"
            name="text"
            onChange={(e) => {
              commonHandel(e);
            }}
          />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Enter Price"
            type="number"
            name="price"
            onChange={(e) => {
              commonHandel(e);
            }}
          />
          <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="date"
            name="date"
            onChange={(e) => {
              commonHandel(e);
            }}
          />
          <input
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            value="submit"
            onClick={(e) => {
              submitHandler(e);
              settoggel(!toggel);
            }}
          />
         
         
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default Form;
