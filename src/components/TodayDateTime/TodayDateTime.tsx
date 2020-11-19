import React from 'react';
import styled from 'styled-components';

type TodayDateTimeProps = {
  date: Date;
  timezone: string;
};

const TodayDateTime = (props: TodayDateTimeProps) => {
  const {date, timezone} = props;
  //@todo: verify browser support
  const plainDate = `${date
    .toLocaleString('default', {
      day: 'numeric',
      weekday: 'long',
      month: 'long',
      year: 'numeric',
      timeZone: timezone,
    })
    .toUpperCase()
    .replaceAll(',', ' ')}`;
  const time = date
    .toLocaleTimeString('default', {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: timezone,
    })
    .toUpperCase();
  return (
    <DateText id="TodayDateTime">
      <p>{plainDate}</p>
      <p>{time}</p>
    </DateText>
  );
};

const DateText = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.05rem;
  text-align: center;
  line-height: 30px;
  margin-top: 50px;
`;

export default TodayDateTime;
