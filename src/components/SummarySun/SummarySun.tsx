import React from 'react';

type SummarySunProps = {
  currentTemp: number;
  city: string;
  summary: string;
};

const SummarySun = (props: SummarySunProps) => {
  const {currentTemp, city, summary} = props;
  return (
    <>
      <div>summary: {summary}</div>
      <div>temp: {currentTemp}</div>
      <div>city: {city}</div>
    </>
  );
};

export default SummarySun;
