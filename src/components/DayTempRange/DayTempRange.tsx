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
      <div>
        <p>{morning}</p>
        <p>MORN</p>
      </div>
      <div>
        <p>{day}</p>
        <p>DAY</p>
      </div>
      <div>
        <p>{evening}</p>
        <p>EVE</p>
      </div>
      <div>
        <p>{night}</p>
        <p>NIGHT</p>
      </div>
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
const Item = styled.div`
`

export default DayTempRange;
