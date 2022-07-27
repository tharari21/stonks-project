import {useState} from 'react';
const StockRow = ({ stock, openModal }) => {
  const [isBought, setIsBought] = useState(false);

  const handleBuyClick = () => {
      openModal(stock);
      setIsBought((wasBought) => !wasBought);
  };
  return (
    <tr className="stock-table-row">
      <td className="stock-table-col">
        <span
          className="ticker-symbol"
          style={{ fontSize: "2em", fontWeight: "bold" }}
        >
          {stock.ticker_symbol}
        </span>
        <span
          className="company-name"
          style={{ fontSize: "1.5em", marginLeft: '4em', paddingTop: '1em' }}
        >
          {stock.name}
        </span>
        <p className="stock-price" style={{fontSize: '1.4em'}}>$ {stock.price}</p>
      </td>
      <td
        className="stock-table-col"
        style={{ float: "right", marginTop: ".5em" }}
      >
        <button
          className={`buy-stock-btn ${isBought ? "bought" : ""}`}
          onClick={handleBuyClick}
        >
          {isBought ? "BUY MORE SHARES" : "BUY SHARES"}
        </button>
      </td>
    </tr>
  );
};
export default StockRow;