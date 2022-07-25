import React, {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'
import Loader from './Loader'
import ErrorCard from './ErrorCard';
const ArticleCards = () => {
    const [articles, setArticles]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    // Use this function to get articles each time and set certain states
    const loadArticles = async (pageNum) => {
      // const req = await fetch(
      //   `https://api.marketaux.com/v1/news/all?page=${pageNum}&language=en&api_token=S5vAZQKrYmitgVCr6TXIB4hP7jPlL1Akvi3hZpN0`
      // );
      // For testing purposes
      const req = await fetch('http://localhost:6001/articles');
      const res = await req.json();
      if (res.data) {
        setArticles([...articles, ...res.data])
        setCurrentPage(previousPage => previousPage + 1)

      }
      else {
        setErrors({...res.error, statusCode: req.status})
      }
      return res;
      
    }
    
    // Get first 3 news articles
    useEffect(() => {
      loadArticles(currentPage);
        
    }, [currentPage]);
    
      
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "5em" }}>NEWS</h1>
      <div className="article-cards">
        {articles.map((article) => (
          <ArticleCard key={article.uuid} article={article} />
        ))}
      </div>
      {errors && <ErrorCard errorMessage={errors.message}/>}
      {isLoading ? <Loader /> : <button className="load-more-articles-btn">Load More</button> }
      
    </div>
  );
}

export default ArticleCards;