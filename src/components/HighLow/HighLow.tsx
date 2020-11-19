import React from 'react';
import styled from 'styled-components';

type HighLowProps = {
  high: number;
  low: number;
};

const HighLow = (props: HighLowProps) => {
  const {high, low} = props;
  return (
    <Wrapper>
      <Circle>
        <Label>HIGH</Label>
        <Temp>{high}</Temp>
      </Circle>
      <Circle>
        <Label>LOW</Label>
        <Temp>{low}</Temp>
      </Circle>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: stetch;
  margin-top: 40px;
`;

const Circle = styled.div`
  height: 157px;
  width: 157px;
  border-radius: 300px;
  border: 2px solid ${props => props.theme.panelContent};
  margin: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

Circle.defaultProps = {
  theme: {
    darkBG: '#AFC5CC',
    panelContent: '#FFFFFF',
  },
};

const Label = styled.p`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.05rem;
  margin-top: 20px;
`;

const Temp = styled.p`
  font-family: 'Hatton', serif;
  font-size: 75px;
  margin-top: 22px;
`;

export default HighLow;
