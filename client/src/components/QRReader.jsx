import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRReader = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleResult = (data) => {
    if (data) {
      setResult(data?.text);
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
      <p>{result}</p>
    </div>
  );
};

export default QRReader;
