import {useState, useEffect} from 'react'
import StockTable from '../components/StockTable';
import Loader from '../components/Loader';
const Browse = () => {
  const [stocks, setStocks] = useState([])
      const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=> {
        // fetch(
        //   `https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=091934288f7e2e4036edd56eb9a33448`
        // )
        setIsLoading(true)
        fetch("http://localhost:6001/stocks")
          .then((r) => r.json())
          .then((stockData) => {
            setIsLoading(false)
            setStocks([...stockData.data])
          });
    }, [])
    return (
        <div>
          { 
            isLoading
                ? <Loader /> 
                : <StockTable stocks={stocks} />
          }
        </div>
    )
}
export default Browse;