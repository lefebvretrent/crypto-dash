import React from 'react'
import AddCoin from '../componentsi/AddCoin';
import CoinList from '../componentsi/CoinList';






const CoinSummaryPage = () => {
    
    return (
        <>
    
  
    

        <div class=" d-flex justify-content-center">
            <div className="col-md-4 col-lg-6 ">
            
            <AddCoin />
            
            <CoinList />
            
            </div>

            {/* NEWS SECTION ON HOMEPAGE? */}
             {/* <div className="col-lg-5">
                

            </div>  */}

           
            
            
            
        </div>
        </>
    )
}

export default CoinSummaryPage
