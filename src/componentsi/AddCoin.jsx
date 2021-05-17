import React from 'react'
import { useState, useContext } from 'react'
import { WatchListContext } from '../context/watchListContext';
import { CleanButton,Card } from '../components/library/index'

const AddCoin = () => {
    const [isActive, setIsActive] = useState(false);
    const {addCoin} = useContext(WatchListContext);

    const availableCoins = [
        "bitcoin",
        "ethereum",
        "ripple",
        "tether",
        "bitcoin-cash",
        "litecoin",
        "eos",
        "tezos",
        "cardano",
        "dogecoin",
        "vechain",
        "fetch-ai"

    ];

    const handleClick = (coin) => {
        addCoin(coin);
        setIsActive(false);

    }
    function refreshPage() {
        window.location.reload(false);
      }
    return (
        <div className="dropdown">
            
            <div className="row ">
            <div className="col-12  col-md-12">
            <CleanButton disabled className="btn" type="button">News</CleanButton>
            
            </div>
            
            <div className="col-6 col-md-6">
            <CleanButton isPrimary onClick={() => setIsActive(!isActive)} className="btn   dropdown-toggle" type="button">Add Coin</CleanButton>
            
            </div>
            <div className="col-6 col-md-6 ">
            <CleanButton isAccent onClick={() => refreshPage()} className="btn " type="button">Refresh Data</CleanButton>
            
            
            </div>
            
            </div>
            <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
                {availableCoins.map(el => {
                    return (
                        <a 
                        onClick={() => handleClick(el)}
                        href="#" className="dropdown-item">{el}</a>
                    )
                })}


            </div>
            
            


            
            
        </div>
    )
}

export default AddCoin
