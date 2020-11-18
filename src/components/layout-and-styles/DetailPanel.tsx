import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  z-index: -1;
  min-height: 100vh;
  background-color: ${props => props.theme.darkBG};
  width: 30%;
  float: left;
`;

Wrapper.defaultProps = {
  theme: {
    darkBG: '#AFC5CC',
  },
};

const DetailPanel = (props: any) => {
  return <Wrapper className="">{props.children}</Wrapper>;
};

export default DetailPanel;
