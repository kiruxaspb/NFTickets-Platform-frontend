import React from 'react';

import QRREader from '../components/QRReader';

import '../style/style.scss';
import { Modal } from '../components';

function CheckQRPage() {
  return (
    <>
      <div className="container">
        <div className="camera">
          <QRREader />
        </div>
        <Modal />
      </div>
    </>
  );
}

export default CheckQRPage;
