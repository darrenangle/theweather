import React from 'react';

type SunriseSunsetProps = {
  sunrise: Date;
  sunset: Date;
  timezone: string;
};

const SunriseSunset = (props: SunriseSunsetProps) => {
  const {sunrise, sunset, timezone} = props;
  return (
    <div>
      <div>
        <p>SUNRISE</p>
        <p>{`${sunrise.toLocaleTimeString('default', {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: timezone,
        })}`}</p>
        <p>SUNSET</p>
        <p>{`${sunset.toLocaleTimeString('default', {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: timezone,
        })}`}</p>
      </div>
    </div>
  );
};

export default SunriseSunset;
