import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  z-index: -1;
  height: 100vh;
  background-color: ${props => props.theme.darkBG};
  width: 30%;
  float: left;
  color: ${props => props.theme.panelContent};
`;

Wrapper.defaultProps = {
  theme: {
    darkBG: '#AFC5CC',
    panelContent: '#FFFFFF',
  },
};

const DetailPanel = (props: any) => {
  return <Wrapper className="">{props.children}</Wrapper>;
};

export default DetailPanel;
