import BuyStockForm from './BuyStockForm'
const BuyStockModal = ({ stock, isModalOpen, closeModal }) => {

    
  return (
    <>
      {isModalOpen && (
        <div className="buy-stock-modal">
          <h3
            style={{
              padding: "0 1.2em",
              margin: ".7em 1em 0 .6em",
              fontSize: "2em",
            }}
          >
            {stock.name}
          </h3>
          <BuyStockForm stockPrice={stock.price} />
          <button className="close-modal-btn" onClick={closeModal}>
            X
          </button>
          <div className="make-it-rain">
            <img  src="./raining-money.gif" />
          </div>
        </div>
      )}
    </>
  );
};

export default BuyStockModal