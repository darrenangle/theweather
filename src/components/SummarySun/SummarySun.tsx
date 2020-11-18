import React from 'react';
import styled from 'styled-components';

type SummarySunProps = {
  currentTemp: number;
  city: string;
  summary: string;
};

const SummarySun = (props: SummarySunProps) => {
  const {currentTemp, city, summary} = props;
  return (
    <SunCircle id="SummarySun">
      <SummaryText>{summary}</SummaryText>
      <TempText>
        {currentTemp}
        <Degree>&deg;</Degree>
      </TempText>
      <LocationText> {city}</LocationText>
    </SunCircle>
  );
};

export default SummarySun;

const SunCircle = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: 300px;
  max-width: 400px;
  min-height: 300px;
  max-height: 400px;
  background-color: ${props => props.theme.sunColor};
  border-radius: 9999px;
  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 300px;
  }
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  color: ${props => props.theme.summaryColor};
`;
SunCircle.defaultProps = {
  theme: {
    sunColor: '#fff',
    summaryColor: '#AFC5CC',
  },
};

const SummaryText = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: lighter;
  font-style: italic;
  font-size: 36px;
  padding-bottom: 28px;
  margin-top: -20px;
  letter-spacing: 1px;
`;

const TempText = styled.div`
  font-family: 'Hatton', serif;
  font-size: 175px;
  margin-left: -15px;
  line-height: 0px;
  margin-bottom: -9px;
`;

const Degree = styled.span`
  font-size: 50px;
  position: absolute;
  top: 40%;
`;

const LocationText = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.05rem;
`;
