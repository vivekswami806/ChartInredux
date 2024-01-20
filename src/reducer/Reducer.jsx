import React from "react";

function Reducer(state, action) {
  switch (action.type) {
    case "change":
      let s = action.payload;
      
      return { ...state, data: [...state.data , s] };
      
    case "filterdata":
    if(action.payload== "all"){ 
        // let s =action.payload          
      return{...state, data:[...state.data], sort:[]}
    }
      else{       
        let FindData = state.data.filter((items) => {
            let year = new Date(items.date).getFullYear();
            return year == action.payload;
          });
          console.log(FindData);       
          return { ...state, sort:FindData };
      }
    default:
      return state;
  }
}

export default Reducer;
