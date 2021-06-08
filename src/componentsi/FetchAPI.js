import React, {useState,useEffect} from 'react'
import NewsArticle from '../componentsi/NewsArticle';


function FetchAPI() {
    const [data, setData] = useState([]);
    
    const apiGet = () => {
        fetch('https://api.lunarcrush.com/v2?data=feeds&key=xj97nitndymd59bi2ltu9b&symbol=BTC,ETH,FET,VET&limit=20&sources=news' )
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json.data);
            


        });
    }
    useEffect(() =>{
        apiGet();
        

    }, [])
    
    return (
        <center>
         <div className="col-12">
           
           
            {data
          ? data.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Coming Soon"}
            
            
            
            
        </div>
        </center>
    )
}

export default FetchAPI
