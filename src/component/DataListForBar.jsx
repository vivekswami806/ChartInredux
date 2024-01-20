import React, { useContext } from "react";
import { contextdata } from "../context/ContextBar";
import ChartBar from "./ChartBar";

function DataListForBar() {
  let { state, FilterData } = useContext(contextdata);

  const arr = state.sort.length == 0 ? state.data : state.sort;
  let barDataMonth=[
    ...new Set(
      state.data.map((e) => {
        let month = new Date(e.date).getMonth();
        let monthStr = new Intl.DateTimeFormat("en-US", {
          month: "short",
        }).format(new Date(0, month));
        return monthStr;
      })
    ),
  ].sort((a, b) =>{
    const monthsOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthsOrder.indexOf(a) - monthsOrder.indexOf(b);
  });

  function UniquePrice(arr) {
   
    let arr1 = [];
  
    for (let i = 0; i < arr.length; i++) {
      let month = new Date(arr[i].date).getMonth();
  
      // Check if the current month already has an accumulated price
      let existingIndex = arr1.findIndex(item => item.month === month);
  
      if (existingIndex !== -1) {
        // If the month exists, add the current price to the accumulated value
        arr1[existingIndex].total += Number(arr[i].price);
      } else {
        // If the month doesn't exist, create a new entry for the month
        arr1.push({ month, total: Number(arr[i].price) });
      }
    }
    arr1.sort((a, b) => a.month - b.month)
    // Extract the total prices for each month
    let result = arr1.map(entry => entry.total);
  
    return result;
  }
  const chartData = {
    labels:barDataMonth,
    datasets: [
      {
        label: "price",
        data: UniquePrice(arr),
        backgroundColor: ["rgba(75,192,12,1)", "#50AF95", "#f3ba2f", "#2a71d0"],
        barThickness: 40,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className=" flex  justify-end  ">
       
        <select
          name=""
          id=""
          onChange={(e) => {
            FilterData(e);
          }}
          className="mr-4 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
           
          <option value="all"
          className=" bg-slate-50 text-black"
          >All </option>
          {[
            ...new Set(
              state.data.map((items) => {
                return new Date(items.date).getFullYear();
              })
            ),
          ].map((items, i) => {
            return (
              <option value={items} key={i} className=" bg-slate-50 text-black">
                {items}
              </option>
            );
          })}
        </select>
        
        {/* <button onClick={ClearFilter}>clear Filter </button> */}
      </div>
      <div className="grid grid-cols-4">
        <p>S.No</p>
        <p>Title </p>
        <p>Price</p>
        <p>Date</p>
        </div>

      {arr.map((items, i) => {
        let month = new Date(items.date).getMonth();
        let monthStr = new Intl.DateTimeFormat("en-US", {
          month: "short",
        }).format(new Date(0, month));
        return (
          <div key={i} className=" grid  grid-cols-4">
            <p>{i + 1} </p>
            <p>{items.text} </p>
            <p>{items.price} </p>
            <p>
              {new Date(items.date).getDate()}
              {monthStr}
              {new Date(items.date).getFullYear()}
            </p>
          </div>
        );
      })}
      <div>
        <ChartBar chartData={chartData} options={options} />
      </div>
    </>
  );
}

export default DataListForBar;
