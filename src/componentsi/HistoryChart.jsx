import React, { useRef, useEffect, useState } from 'react';
import Chartjs from 'chart.js';
import { historyOptions } from '../chartConfigs/chartConfigs';
import { GradientLineChartCard } from "../components/library/index";
import { BadgeFiguresCard } from "../components/library";
import { CleanButton,Card } from '../components/library/index'


const HistoryChart = ({data}) => {
    const chartRef = useRef(); 
    const {day, week, year, detail} = data;
    const [timeFormat, setTimeFormat] = useState("24h");

    const determineTimeFormat = () => {
        switch (timeFormat){
            case "24h":
                return day;
            case "7d":
                return week;
            case "1y": 
                return year;
            default:
                return day;
        }
    }
    
    useEffect(() => {
        if (chartRef && chartRef.current && detail) {
            const chartInstance = new Chartjs(chartRef.current, {
                type: 'line',
    data: {
        
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: ` ${detail.name} price`,
            data: determineTimeFormat(),
            backgroundColor: "#8739F9",
            // rgba(174, 305, 194, 0.4)
            borderColor: "#8739F9", 
            pointRadius: 0,
            backdropColor: '#242424',
            
            
            
        }],
    },
    options: {
        ...historyOptions,
    }
            } );
        }

    });
    
    const renderPrice = () => {
        if (detail) {
            return (
                <>
                <p className="my-0">${detail.current_price.toFixed(2)}</p>
                {/* <p className={
                    detail.price_change_24h < 0 ? "text-danger my-0" : "text-success my-0"

                }>{detail.price_change_percentage_24h.toFixed(2)}%</p> */}
                </>
            )
        }
    }
     const renderPercentage7d = () => {
         if (detail) {
            return (
                
                <>
                
                 <p className={
                     detail.price_change_percentage_7d_in_currency < 0 ? "text-danger my-0" : "text-success my-0"

               }>{detail.price_change_percentage_7d_in_currency.toFixed(1)}%</p>
               </>
            )
         }
    }
    const renderPercentage = () => {
        if (detail) {
            return (
                
                <>
                
                <p className={
                    detail.price_change_24h < 0 ? "text-danger my-0" : "text-success my-0"

                }>{detail.price_change_percentage_24h.toFixed(1)}%</p>
                </>
            )
        }
    }
    const items = [
        {
          label: "Price",
          value: renderPrice() ,
        },
        {
          label: "Daily",
          value: renderPercentage() ,
        },
        {
          label: "Weekly",
          value: renderPercentage7d(),
        },
        
      ];
    
      
      
    return (
        <>
        
        <div className="col-12">
           
            {/* <div>{renderPrice()}</div> */}
            <div className="mt-2">
            
            <BadgeFiguresCard  items={items} className="mt-2"/>
           <canvas ref={chartRef} id="myChart" width={250} height={250} ></canvas>
           </div>
           <div className="col-12 chart-button mt-2" style={{ display: "flex" }}>
           <CleanButton isDefault onClick={() => setTimeFormat("24h")}
               
               className=" btn" >Day View</CleanButton>&nbsp;

               <CleanButton isPrimary onClick={() => setTimeFormat("7d")} className="btn ">Week View</CleanButton>&nbsp;
               <CleanButton isAccent onClick={() => setTimeFormat("1y")} className="btn ">Year View</CleanButton>

               
             
           </div>
           </div>
           </>
       
        
    )
}

export default HistoryChart
