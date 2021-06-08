import React, { useContext} from 'react'
import { NewsContext } from '../context/newsContext';
import NewsArticle from '../componentsi/NewsArticle';
import { Spinner } from 'reactstrap';





function News(props) {
  
   
    const { data } = useContext(NewsContext);
    
    
    
    return (
      <center>
        <div className="col-12">
            {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Coming Soon"}
        </div>
        </center>
    )
}

export default News
