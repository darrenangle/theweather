import styled from 'styled-components';
import React from 'react';

const MainPanel = (props: any) => {
  return (
    <Wrapper className="">
      <TopHalf />
      <BottomHalf />
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  min-height: 916px;
  width: 70%;
  float: left;
  @media (max-width: 1339px) {
    width: 100%;
  }
`;

const TopHalf = styled.div`
  width: 100%;
  height: 50vh;
  min-height: 458px;
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
  height: 50vh;
  min-height: 458px;
  background-color: ${props => props.theme.medBG};
  position: absolute;
  bottom: 0;
`;

BottomHalf.defaultProps = {
  theme: {
    medBG: '#D8ECF8',
  },
};

export default MainPanel;
