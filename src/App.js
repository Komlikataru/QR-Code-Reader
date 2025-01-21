import React, { useState } from 'react';
import Header from './components/Header';
import QRScanner from './components/QRScanner';
import ScanResult from './components/ScanResult';

const App = () => {
  const [scannedData, setScannedData] = useState('');

  return (
    <div className="container">
      <Header />
      <QRScanner setScannedData={setScannedData} />
      {scannedData && <ScanResult data={scannedData} />}
    </div>
  );
};

export default App;
