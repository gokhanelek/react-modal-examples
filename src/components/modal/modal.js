import React from 'react';
import './modal.css';

function Modal({ show, handleClose, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-header">
        <h1>Header</h1>
      </div>
      <div className="modal-body">
        {children}
      </div>
      <div className="modal-footer" >
        <button className='btn' onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal