import React from 'react'

const ArticleCard = ({article}) => {
  return (
    <div className="article-card">

        <h3>{article.title}</h3>
        <img src={article.image_url} />
        <p>{article.snippet}</p>
        <a style={{position: 'relative', bottom: '0px', right: '0px'}} href={article.url}>read more...</a>
    </div>
  )
}

export default ArticleCard;