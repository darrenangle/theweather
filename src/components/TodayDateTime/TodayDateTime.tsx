import React from 'react';

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
    .replaceAll(',', ' ')}`;
  const time = date.toLocaleTimeString('default', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: timezone,
  });
  return (
    <div id="TodayDateTime">
      <p>{plainDate}</p>
      <p>{time}</p>
    </div>
  );
};

export default TodayDateTime;
