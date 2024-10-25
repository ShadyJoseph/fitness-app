import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <InfinitySpin color="#00BFFF" height={400} width={400} />
    </div>
  );
}

export default Loader;

