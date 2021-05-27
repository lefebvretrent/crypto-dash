import React from 'react'
import {Link} from 'react-router-dom';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';

import {  useContext, useState } from 'react'
import { WatchListContext } from '../context/watchListContext';
import { Alert } from 'reactstrap';



const Coin = ({coin, deleteCoin}) => {
    const {addCoin} = useContext(WatchListContext);
    const [isOpen, setIsOpen] = useState(false);
    
    const handleVisible = () => { 
        setIsOpen(true)
        setTimeout(() => { 
            setIsOpen(false)
        }, 2000);
    } 

   
        
    
    
    
    return (
        // style={{ textDecoration: 'none', color: 'white' }}
        
        <>
        <Alert className="alert" isOpen={isOpen} ><center>Successfully added to Watchlist</center></Alert>
        
        
        <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
            <li className="coinlist-item.list-group-item.list group-item-action d-flex justify-content-between align-items-center coin">
            
                <img className="coinlist-image" src={coin.image}  alt=""/>
                <span className="text-decoration-none">{coin.current_price}</span>
                
                <span className={coin.price_change_percentage_24h < 0 ? "text-danger mr-2" : "color:white mr-2"}> 

                {coin.price_change_percentage_24h < 0 ? <TrendingDownIcon style={{fill: "red"}}/> : <TrendingUpIcon style={{fill: "green"}}/>}
                
                    {coin.price_change_percentage_24h} %
                
                    
                </span>
                

                
                <AddIcon onClick={(e) => {
                    e.preventDefault()
                    addCoin(coin.id)
                    handleVisible()
                    

                    
                    
                   

                }}/>
                
                
               
                
                
                    
            </li>
        </Link>
        </>
    )
}

export default Coin
