import React from 'react';
import { IconFigureCard } from '../components/library/index'

const CoinData = ({data}) => {

    const renderData = () =>{
        if (data){
            return (
                <>
                
                <div className="row">
               <div className="col-12 col-lg-6">
               <IconFigureCard
            label={'Market Cap'}
            value={data.market_cap}
            icon={"dollar-alt"}
          />
          </div>
          <div className="col-12 col-lg-6">
               <IconFigureCard
            label={'Volume(24H)'}
            value={data.total_volume}
            icon={"dollar-alt"}
          />
          </div>
          </div>
          <div className="row">
               <div className="col-12 col-lg-6">
               <IconFigureCard
            label={'High 24h'}
            value={data.high_24h}
            icon={"chart-line"}
          />
          </div>
          <div className="col-12 col-lg-6">
               <IconFigureCard
            label={'Low 24H'}
            value={data.low_24h}
            icon={"chart-line"}
          />
          </div>
          </div>
          <div className="row">
               <div className="col-12 col-lg-6">
               <IconFigureCard
            label={'Total Supply'}
            value={data.total_supply}
            icon={"receipt-alt"}
          />
          </div>
          <div className="col-12 col-lg-6">
               <IconFigureCard
            label={'Circulating Supply'}
            value={data.circulating_supply}
            icon={"receipt-alt"}
          />
          </div>
          </div>
          
        
            
        </>
            )
        }
    }
    return (
        <div>
            {renderData()}
            
        </div>
    )
}

export default CoinData
