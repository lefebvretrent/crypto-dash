import React from 'react'


import Searchbar from '../componentsi/Searchbar';
import coinGecko from '../apis/coinGecko';
import {useState, useEffect, useContext} from 'react';

import Spinner from '../componentsi/Spinner/index'
import Coin1 from '../componentsi/Coin1';
import { Card } from "../componentsi/index";
import { WatchListContext } from '../context/watchListContext';






const FullListPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
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
    
    
    
    
    if(isLoading){
        return <Spinner />
    }else{

    return <>
    <div class=" d-flex justify-content-center">
            <div className="col-md-4 col-lg-6 ">

            <Searchbar placeholder="Search Coin Name"
        onChange={(e) => {setSearchTerm(e.target.value)}}/>

               <div>
                   <ul className="coinlist list-group mt-2">
                {coins.filter((val) => {
                    if (searchTerm === "") {
                        return val
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }
                
                ).map(coin => {
                    return <Card  cardTitle={coin.name}><Coin1 key={coin.id} coin={coin} deleteCoin={deleteCoin} />
                            
                        </Card>
                    
                })}
            </ul>
            </div>
            </div>
           
            
            
            
        </div>
    
    </>
    }
    
    
    
   

    
}

export default FullListPage