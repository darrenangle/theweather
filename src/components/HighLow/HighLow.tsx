import React from 'react';

type HighLowProps = {
  high: number;
  low: number;
};

const HighLow = (props: HighLowProps) => {
  const {high, low} = props;
  return (
    <div>
      <div>high: {high}</div>
      <div>low: {low}</div>
    </div>
  );
};

export default HighLow;
