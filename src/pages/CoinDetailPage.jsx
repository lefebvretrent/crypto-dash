import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import CoinData from '../componentsi/CoinData'
import HistoryChart from '../componentsi/HistoryChart'
import coinGecko from '../apis/coinGecko'
import Spinner from '../componentsi/Spinner/index'
import { PieChartCard } from "../components/library/index";



const CoinDetailPage = () => {
// TESTING



//TILL HERE


    const { id } = useParams();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const formatData = data => {
        return data.map(el => {
            return {
                t: el[0],
                y: el[1].toFixed(2),
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const [day, week, year, detail] = await Promise.all([
                coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: "cad",
                    days: "1",
                },
            }),
            coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: "cad",
                    days: "7",
                },
            }),
            coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: "cad",
                    days: "365",
                },
            }),
            coinGecko.get(`/coins/markets`, {
                params: {
                    vs_currency: "cad",
                    ids: id,
                    price_change_percentage: "7d"
                   
                },
            }),
            

        ])
        

            
            console.log(detail.data);
            setCoinData({
                day: formatData(day.data.prices),
                week: formatData(week.data.prices),
                year: formatData(year.data.prices),
                detail: detail.data[0],
            });
            setIsLoading(false);

        }
        fetchData();
    }, []);
    
    const rednerData = () => {
        if (isLoading){
            return <Spinner />
        }
        return ( 
            <>
            <div className="row">
            <div className="col-12 col-lg-4" >
                
                <HistoryChart data={coinData}/>
                
                
                
                

            </div>
            
            <div className="col-12 col-lg-8">
            <CoinData data={coinData.detail}/>






            <PieChartCard
            data={coinData.detail}
            
        cardTitle="Earnings"
        label="Target"
        value="$53k"
        series={[20, 20, 60]}
      />
      
           
      </div>
            <div className="col-12 col-lg-3">
            <CoinData />
            
            </div>
            </div>
            </>
            
            
        )
    }


    return rednerData();
        
}

export default CoinDetailPage
