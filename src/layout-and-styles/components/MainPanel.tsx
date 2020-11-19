import styled from 'styled-components';
import React from 'react';

const TopHalf = styled.div`
  width: 100%;
  height: 416px;
  background-color: ${props => props.theme.lightBG};
  position: absolute;
`;

TopHalf.defaultProps = {
  theme: {
    lightBG: '#E7F2F8',
  },
};

const BottomHalf = styled.div`
  width: 100%;
  height: 416px;
  margin-top: 416px;
  background-color: ${props => props.theme.medBG};
  position: absolute;
`;

BottomHalf.defaultProps = {
  theme: {
    medBG: '#D8ECF8',
  },
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  min-height: 832px;
  width: 70%;
  float: left;
`;

const MainPanel = (props: any) => {
  return (
    <Wrapper className="">
      <TopHalf />
      <BottomHalf />
      {props.children}
    </Wrapper>
  );
};
export default MainPanel;
