import React, { useEffect, useState } from 'react';
import LineChart from './XYChart';
import axios from 'axios';

const App = () => {

  const [xData,setxData] = useState([]) 
  const [yData,setyData] = useState([]) 

  const getData = async () =>{
    try{
      await axios.get("https://retoolapi.dev/gDa8uC/data").then(resp => {
      setxData(resp.data)
      console.log(resp.data);
    })
    await axios.get("https://retoolapi.dev/o5zMs5/data").then(resp => {
      setyData(resp.data)
    })
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getData() 
  },[])


  // // Combining x and y data based on ID
  // const combinedData = xData.map(xItem => {
  //   const matchingYItem = yData.find(yItem => yItem.id === xItem.id);
  //   if (matchingYItem) {
  //     return {
  //       id: xItem.id,
  //       xLabel: xItem.Label,
  //       xRandomNumber: parseFloat(xItem.RandomNumber),
  //       yLabel: matchingYItem.Label,
  //       yRandomNumber: parseFloat(matchingYItem.RandomNumber)
  //     };
  //   }
  //   return null;
  // }).filter(item => item !== null);
  // console.log(combinedData);


  return (
    <div className='chart' >
      <h1>XY Chart</h1>
      <LineChart dataOne={xData} dataTwo={yData} />
    </div>
  );
};

export default App;
