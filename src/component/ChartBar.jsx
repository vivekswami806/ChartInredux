import React from 'react'
import Chart from "chart.js/auto"
import { Bar } from "react-chartjs-2"
const ChartBar = ({chartData}) => {
  return (
    <div>ChartBar

<Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  )
}

export default ChartBar