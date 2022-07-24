import React from 'react'
import NewsCard from './NewsCard'
const NewsCards = ({news}) => {
    useEffect(()=> {
        `https://api.marketaux.com/v1/news/all?api_token=${process.env.MARKETAUX_API_KEY}`;
    })
  return (
    <div>{news.map(newsItem => <NewsCard newsItem={newsItem}/>)}</div>
  )
}

export default NewsCards