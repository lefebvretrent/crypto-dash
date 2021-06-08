import { DialogContent } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { NewsContextProvider } from '../context/newsContext';
import News from '../componentsi/News';
import FetchAPI from '../componentsi/FetchAPI'


 
  




const NewsPage = () => {
  

  




    
    
    return (
        <>
        
         <FetchAPI />
        
        <center>
        <div className="col-9">
        <iframe width="100%" scrolling="yes" allowtransparency="true" frameborder="0" src="https://cryptopanic.com/widgets/news/?bg_color=242424&amp;currencies=BTC%2CETH&amp;font_family=sans&amp;font_size=19&amp;header_bg_color=30343B&amp;header_text_color=FFFFFF&amp;link_color=0091C2&amp;news_feed=trending&amp;posts_limit=10&amp;text_color=FFFFFF&amp;title=Latest%20News" height="800px"></iframe>
        </div>
        </center>
        <NewsContextProvider>
            {/* <News />  */}
        </NewsContextProvider>
        </>
        
        

        
        


        


        
    
        
    )
    
    
}

export default NewsPage
