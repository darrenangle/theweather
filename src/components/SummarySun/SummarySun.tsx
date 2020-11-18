import React from 'react';
import styled from 'styled-components';

const SunCircle = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: 400px;
  max-width: 500px;
  min-height: 400px;
  max-height: 500px;
`;

type SummarySunProps = {
  currentTemp: number;
  city: string;
  summary: string;
};

const SummarySun = (props: SummarySunProps) => {
  const {currentTemp, city, summary} = props;
  return (
    <SunCircle id="SummarySun">
      <div>
        <div>summary: {summary}</div>
        <div>temp: {currentTemp}</div>
        <div>city: {city}</div>
      </div>
    </SunCircle>
  );
};

export default SummarySun;
