import React, { createContext, useEffect, useState } from 'react';



import axios from 'axios';

export const NewsContext = createContext()


export const NewsContextProvider = (props) => {
  
  
  
    const [data, setData] = useState();
    const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";
    var todayDate = new Date().toISOString().slice(0, 10);
    
   
  
    useEffect(() => {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=bitcoin+ethereum&language=en&sortBy=popularity&excludeDomains=www.fool.com&from=${todayDate}&apiKey=${apiKey}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <NewsContext.Provider value={{ data }}>
        {props.children}
      </NewsContext.Provider>
    );

 }

