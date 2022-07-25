import {useEffect} from 'react'
const Browse = () => {
    useEffect(()=> {
        fetch(
          `https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=091934288f7e2e4036edd56eb9a33448`
        )
          .then((r) => r.json())
          .then((data) => console.log(data));
    })
    return <div></div>
}
export default Browse;