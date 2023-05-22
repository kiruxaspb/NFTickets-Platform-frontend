import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setShowModal } from '../redux/slices/ShowModalSlice';

import success from '../assets/images/success.svg';

function Modal() {
  const dispatch = useDispatch();

  const showModal = useSelector((state) => state.ShowModalSlice);
  const isTrueQR = useSelector((state) => state.QRStateSlice.isTrue);

  const handleCloseModal = () => {
    dispatch(setShowModal(false));
  };

  const handleOpenModal = () => {
    dispatch(setShowModal(true));
  };

  console.log(isTrueQR);

  return (
    <div>
      {/* <button onClick={handleOpenModal}>Open Modal</button> */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Статус</h2>
              <span className="modal-close" onClick={handleCloseModal}>
                &times;
              </span>
            </div>
            <div className="modal-status">
              <p>{`${isTrueQR}`}</p>
              <img src={success}></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
