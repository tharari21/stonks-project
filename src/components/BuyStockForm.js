import {useState} from 'react'


const BuyStockForm = ({stockPrice}) => {
    const [numberOfShares, setNumberOfShares] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    const handleNumberOfSharesChange = (e) => {
        const numShares = parseInt(e.target.value);
        console.log(numShares)
        if (numShares > 0) {
          setNumberOfShares(() => numShares);
          setTotalCost(() => stockPrice * numShares)
        }


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch()
    }
  return (
    <form className="buy-stock-form" onSubmit={handleSubmit}>
      <label>Number of Shares</label>
      <input
        type="number"
        name="numberOfShares"
        value={numberOfShares}
        onChange={handleNumberOfSharesChange}
      />
      <label>Total Cost</label>
      <input disabled type="text" name="totalCost" value={totalCost} />
      <input type="submit" value="BUY NOW" />
    </form>
  );
}

export default BuyStockForm