import { DialogContent } from '@material-ui/core'
import React from 'react'

const NewsPage = () => {
    const currentDate = new Date().toLocaleDateString();
    
    return (
        <>

        <center>
        <h1>Today's News {currentDate}</h1>
        </center>

        <div className="row reddit">
        
        <iframe id="reddit-embed" src="https://www.redditmedia.com/r/CryptoCurrency/comments/nl0xwa/gamestop_is_building_an_nft_platform_on_ethereum/?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=dark" sandbox="allow-scripts allow-same-origin allow-popups" style={{border: "none", scrolling: "no", width: 640, height:126}}></iframe>
        
        <iframe id="reddit-embed" src="https://www.redditmedia.com/r/CryptoCurrency/comments/nl0xwa/gamestop_is_building_an_nft_platform_on_ethereum/?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=dark" sandbox="allow-scripts allow-same-origin allow-popups" style={{border: "none", scrolling: "no", width: 640, height:126}}></iframe>

        <iframe id="reddit-embed" src="https://www.redditmedia.com/r/CryptoCurrency/comments/nl0xwa/gamestop_is_building_an_nft_platform_on_ethereum/?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=dark" sandbox="allow-scripts allow-same-origin allow-popups" style={{border: "none", scrolling: "no", width: 640, height:126}}></iframe>

        </div>

        <div className="row twitter">
        
        </div>
        


        
    
        </>
    )
}

export default NewsPage
