import React, { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Reducer";
export const contextdata = createContext();
function ContextBar({ children }) {
  function readStroage() {
    return localStorage.getItem("ecom")
      ? JSON.parse(localStorage.getItem("ecom"))
      : {
          data: [],
          sort:[]
        };
  }

  let [state, dispatch] = useReducer(reducer, readStroage());
  function FilterData(e) {
    dispatch({ type: "filterdata", payload: e.target.value });
  }
  //creating
  useEffect(() => {
    localStorage.setItem("ecom", JSON.stringify(state));
  }, [state]);
  return (
    <div>
      <contextdata.Provider value={{ dispatch, state, FilterData }}>
        {children}
      </contextdata.Provider>
    </div>
  );
}

export default ContextBar;
