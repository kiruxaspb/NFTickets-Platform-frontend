import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useDispatch } from 'react-redux';

import { setIsTrueQR } from '../redux/slices/QRStateSlice';
import { setShowModal } from '../redux/slices/ShowModalSlice';

const QRReader = () => {
  const [result, setResult] = useState('');
  const dispatch = useDispatch();

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
    dispatch(setShowModal(true));
  };

  const handleResult = (data) => {
    if (data) {
      setResult(data?.text);
      dispatch(setShowModal(true));
      dispatch(setIsTrueQR(true));
      console.log(JSON.parse(data?.text));
    }
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
        onResult={handleResult}
      />
    </div>
  );
};

export default QRReader;
