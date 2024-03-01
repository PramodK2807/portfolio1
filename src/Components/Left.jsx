import React from 'react';

const Left = () => {
  return (
    <div
      style={{
        position: 'fixed',
        left: "10px",
        top: "50%",
        fontSize: '50px',
        color: 'red',
        writingMode: 'vertical-lr',
      }}>
      Left
    </div>
  );
};

export default Left;
