import React from 'react'
import { CleanButton,Card } from '../components/library/index'
import {Link} from 'react-router-dom';

const NewsArticle = ({data}) => {
    console.log(data);
    
    return (
        
        <div className="col-sm-10 col-lg-6 col-md-8">
            
            <a target="_blank" href={data.url} style={{textDecoration: "none"}}>
            
            <Card cardTitle={data.title} >
               

            <li className="d-flex  ">
                
            <div className="col-6">
            <img className="news-image" src={data.urlToImage}  alt=""/>
            </div>
            
            

            <div className="news-text text-decoration-none">{data.description}</div>
 
        </li>
  
            </Card>
            </a>

        </div>
    )
}

export default NewsArticle
