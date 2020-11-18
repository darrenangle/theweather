import React from 'react';

type SunriseSunsetProps = {
  sunrise: Date;
  sunset: Date;
};

const SunriseSunset = (props: SunriseSunsetProps) => {
  const {sunrise, sunset} = props;
  return (
    <div>
      <div>
        <p>SUNRISE</p>
        <p>{`${sunrise.toLocaleTimeString()}`}</p>
        <p>SUNSET</p>
        <p>{`${sunset.toLocaleTimeString()}`}</p>
      </div>
    </div>
  );
};

export default SunriseSunset;
