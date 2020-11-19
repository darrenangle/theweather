import React from 'react';
import styled from 'styled-components';

type SunriseSunsetProps = {
  sunrise: Date;
  sunset: Date;
  timezone: string;
};

const SunriseSunset = (props: SunriseSunsetProps) => {
  const {sunrise, sunset, timezone} = props;
  return (
    <Wrapper>
      <Item>
        <Label>SUNRISE</Label>
        <Temp>
          {sunrise.toLocaleTimeString('default', {
            hour: 'numeric',
            minute: 'numeric',
            timeZone: timezone,
          })}
        </Temp>
      </Item>
      <Item>
        <Label>SUNSET</Label>
        <Temp>{`${sunset.toLocaleTimeString('default', {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: timezone,
        })}`}</Temp>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 80px;
  text-align: center;
`;

const Label = styled.p`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.05rem;
  margin-bottom: 30px;
`;
const Temp = styled.p`
  font-family: 'Hatton', serif;
  font-size: 70px;
`;

const Item = styled.div`
  margin: 30px 0px;
`;
export default SunriseSunset;
