import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Doughnut} from 'react-chartjs-2';
//implemented use state and set data to what I think it wanted
function ChartMake() {
    const [chartData, setChartState] = useState({})
       const myChart = () => {
        let myData = [];
        let dataLabels = [];
        axios.get('http://localhost:4000/budget')
        .then(res =>{
            console.log(res);
            for(const dataObj of res.data.myBudget){
                myData.push(parseInt(dataObj.budget))
                dataLabels.push(dataObj.title)
            }
            setChartState({
                labels: dataLabels,
                datasets: [
                    {
                        data: myData,
                        backgroundColor: ['#ffcd56' ,
                        '#ff6384' ,
                        '#36a2eb' ,
                        '#fd6b19', 
                        'purple',
                        'black',
                        'orange',
                        'green',
                        'cyan',
                        'red',
                        'brown',
                  ]
                    }
                ]
            })
        })
        .catch(err =>{
            console.log(err);
        })
        console.log(myData, dataLabels);

       
    }
    useEffect(()=>{
        myChart()
    }, [])
  return (
      <div>
          <Doughnut data = {chartData}/>
      </div>
      
  );
}

export default ChartMake;