import React, {useEffect, useState, useContext } from 'react'
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin1 from "./Coin1";
import { Card } from "../componentsi/index";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Spinner from './Spinner';



const FullList = () => {
    const [coins, setCoins] = useState([]);
    const {watchList, deleteCoin} = useContext(WatchListContext);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const fetchdata = async () => {
            setIsLoading(true)
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "cad",
                    // ids: watchList.join(","), 
                }
            })

            setCoins(response.data)
            setIsLoading(false)

        }

        // if (watchList.length > 0) {
        //     fetchdata();
        // } else 
        //     setCoins([]);
        
        fetchdata();
    }, []);
    

    const renderCoins = () => {
        if(isLoading){
            return <Spinner />
        }
        return (
            
            
           
            <ul className="coinlist list-group mt-2">
                {coins.map(coin => {
                    return <Card  cardTitle={coin.name}><Coin1 key={coin.id} coin={coin} deleteCoin={deleteCoin} />
                            
                        </Card>
                    
                })}
            </ul>
            
            
        )
    }
    return <div>{renderCoins()}</div>
        
    
}

export default FullList
