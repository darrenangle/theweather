import styled from 'styled-components';
import React from 'react';

const TopHalf = styled.div`
  width: 100%;
  height: 50vh;
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
  margin-top: 50vh;
  background-color: ${props => props.theme.lightBG};
  position: absolute;
`;

BottomHalf.defaultProps = {
  theme: {
    lightBG: '#D8ECF8',
  },
};

const Wrapper = styled.div`
  position: relative;
  z-index: -1;
  min-height: 100vh;
`;

const MainPanel = (props: any) => {
  return (
    <Wrapper className="col-9 col-sm-12">
      <TopHalf />
      <BottomHalf />
      {props.children}
    </Wrapper>
  );
};
export default MainPanel;
