import React from 'react';
import styled from 'styled-components';

type DayTempRangeProps = {
  morning: number;
  day: number;
  evening: number;
  night: number;
};

const DayTempRange = (props: DayTempRangeProps) => {
  const {morning, day, evening, night} = props;
  return (
    <Wrapper>
      <Item>
        <Temp>{morning}</Temp>
        <Label>MORN</Label>
      </Item>
      <Item>
        <Temp>{day}</Temp>
        <Label>DAY</Label>
      </Item>
      <Item>
        <Temp>{evening}</Temp>
        <Label>EVE</Label>
      </Item>
      <Item>
        <Temp>{night}</Temp>
        <Label>NIGHT</Label>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: stetch;
  margin-top: 80px;
  padding: 0px 30px;
`;
const Item = styled.div`
  text-align: center;
`;
const Label = styled.p`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.05rem;
  margin-top: 20px;
`;

const Temp = styled.p`
  font-family: 'Hatton', serif;
  font-size: 40px;
`;

export default DayTempRange;
