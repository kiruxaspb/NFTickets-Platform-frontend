import React from 'react';
import { useSelector } from 'react-redux';

import '../style/style.scss';

import QRREader from '../components/QRReader';
import { Modal, Navbar } from '../components';

function CheckQRPage() {
  const isTrueQR = useSelector((state) => state.QRStateSlice.isTrue);
  const showModal = useSelector((state) => state.ShowModalSlice.showModal);

  return (
    <>
      <div className="wrapper secondary">
        <div className="container">
          <Navbar />
          <div className="camera">
            <QRREader />
          </div>
          {showModal && <Modal />}
        </div>
      </div>
    </>
  );
}

export default CheckQRPage;
