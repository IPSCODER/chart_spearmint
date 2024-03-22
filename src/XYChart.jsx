import React, {useRef} from 'react'
import {Chart as ChartJs, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js";
import { Line, getElementsAtEvent} from "react-chartjs-2";

 
ChartJs.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const LineChart = (props) => {
    const chartRef = useRef();

  const data={
    labels:props?.dataOne.map((i) => i.Label),
    datasets:[{
      label:"X",
      data:props?.dataOne.map((i) => i.RandomNumber),
      borderColor:"#000",
      backgroundColor:"#000",
      tension:0.4,
      link:["https://www.chartjs.org","https://www.chartjs3.com","https://www.google.com"]
    },
    {
      label:"y",
      data:props?.dataTwo.map((i) => i.RandomNumber),
      borderColor:"rgb(26, 188, 156)",
      backgroundColor:"rgb(26, 188, 156)",
      tension:0.4,
      link:["https://www.chartjs.org","https://www.chartjs3.com","https://www.google.com"]
    }]
  }

  const options ={
  }


  const onClick = (e) =>{
    if (getElementsAtEvent(chartRef.current,e).length > 0 ) { 
      // console.log(getElementsAtEvent(chartRef.current,e))
      const clickDatasetIndex = getElementsAtEvent(chartRef.current,e)[0].datasetIndex;
      // console.log(clickDatasetIndex);
      const dataPoint = getElementsAtEvent(chartRef.current,e)[0].index;
      // console.log(dataPoint);

      // console.log(data.datasets[clickDatasetIndex].link);
      const link = data.datasets[clickDatasetIndex].link[dataPoint];
      // window.open("https://www.chartjs3.com","_blank");
    }

  }




 
  return (
    <>
      
        <Line
        data={data}
        options={options}
        onClick={onClick}
        ref={chartRef}
        >

        </Line>
    </>
  )
}

export default LineChart