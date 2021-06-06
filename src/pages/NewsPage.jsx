import { DialogContent } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { NewsContextProvider } from '../context/newsContext';
import News from '../componentsi/News';
import axios from 'axios';






const NewsPage = () => {
    
    return (
        
        <NewsContextProvider>
            <News /> 
        </NewsContextProvider>
        
        

        
        


        


        
    
        
    )
    
    
}

export default NewsPage
