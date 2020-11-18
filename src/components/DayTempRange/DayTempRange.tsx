import React from 'react';

type DayTempRangeProps = {
  morning: number;
  day: number;
  evening: number;
  night: number;
};

const DayTempRange = (props: DayTempRangeProps) => {
  const {morning, day, evening, night} = props;
  return (
    <>
      <br />
      <div>{morning}</div>
      <div>{day}</div>
      <div>{evening}</div>
      <div>{night}</div>
    </>
  );
};

export default DayTempRange;
