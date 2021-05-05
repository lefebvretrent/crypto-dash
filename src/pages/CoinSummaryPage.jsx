import React from 'react'
import AddCoin from '../componentsi/AddCoin';
import CoinList from '../componentsi/CoinList';
import HistoryChart from '../componentsi/HistoryChart'




const CoinSummaryPage = ({}) => {
    
    return (
        <div class=" d-flex justify-content-center">
            <div className="col-6">
               
            <AddCoin />
            <CoinList />
            
            </div>
           
            
            
            
        </div>
    )
}

export default CoinSummaryPage
