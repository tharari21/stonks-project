import {useState, useEffect} from 'react';
import StockRow from './StockRow';
import BuyStockModal from './BuyStockModal';
const StockTable = ({stocks}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Sets the stock data that the modal is for
    const [modalStock, setModalStock] = useState()
    const openModal = (stock) => {
        setIsModalOpen(true);
        setModalStock(stock);
    }
    const closeModal = () => {
        setIsModalOpen(false);
        setModalStock(null);

    }
    

    return (
      <div className="stock-table-container">
        <table className="stock-table">
          <tbody>
            {stocks.map((stock) => (
              <StockRow key={stock.id} stock={stock} openModal={openModal} />
            ))}
          </tbody>
        </table>
        <BuyStockModal
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          stock={modalStock}
        />
      </div>
    );
}
export default StockTable;