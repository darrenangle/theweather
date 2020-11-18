import React from 'react';

type TodayDateTimeProps = {
  date: Date;
};

const TodayDateTime = (props: TodayDateTimeProps) => {
  const {date} = props;
  //@todo: verify browser support
  const plainDate = `${date
    .toLocaleString('default', {
      day: 'numeric',
      weekday: 'long',
      month: 'long',
      year: 'numeric',
    })
    .replaceAll(',', ' ')}`;
  const time = date.toLocaleTimeString('default', {
    hour: 'numeric',
    minute: 'numeric',
  });
  return (
    <div>
      <p>{plainDate}</p>
      <p>{time}</p>
    </div>
  );
};

export default TodayDateTime;
