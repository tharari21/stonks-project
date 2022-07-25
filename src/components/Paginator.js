import React from 'react'
const Paginator = ({onNextPageClick, onPrevPageClick}) => {
    
  return (
    <div className="paginator">
      <div>
        <button onClick={onPrevPageClick}>PREV</button>
      </div>
      <div>
        <button onClick={onNextPageClick}>NEXT</button>
      </div>
    </div>
  );
}

export default Paginator