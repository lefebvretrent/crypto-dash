import React from 'react';
import { IconFigureCard } from '../components/library/index'
import { PieChartCard } from "../components/library/index";

const CoinData = ({data}) => {

  

    const renderData = () =>{
        if (data){
          let circulatingSupply = data.circulating_supply;
  let totalSupply = data.total_supply;
  console.log(totalSupply);
  console.log(circulatingSupply);
            return (
                <>
                
                <div className="row">
                <div className="col-12 col-lg-12 mt-2">
               <IconFigureCard
               isPrimary
            label={'Name'}
            value={data.name}
            icon={"dollar-alt"}
          />
          </div>
                  
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
               {/* <IconFigureCard
            label={'Total Supply'}
            value={data.total_supply}
            icon={"receipt-alt"}
          /> */}
          </div>
          <div className="col-12 col-lg-6">
               {/* <IconFigureCard
            label={'Circulating Supply'}
            value={data.circulating_supply}
            icon={"receipt-alt"}
          /> */}
          </div>
          {/* change col-lg-12 to 6 for adding more information  */}
          <div className="col-12 col-lg-12">
            
          <PieChartCard
            
            
        cardTitle="Total Supply"
        label="Circulating Supply"
        value={circulatingSupply}
        series={[ circulatingSupply, totalSupply]}
        /* Purple is circulating supply and blue is the total supply */
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
