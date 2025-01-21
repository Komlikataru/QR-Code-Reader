import React from 'react';

const ScanResult = ({ data }) => {
  return (
    <div>
      <h3>Scanned Data:</h3>
      <p>{data}</p>
    </div>
  );
};

export default ScanResult;
