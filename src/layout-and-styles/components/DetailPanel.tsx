import styled from 'styled-components';
import React from 'react';

const DetailPanel = (props: any) => {
  return <Wrapper className="">{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  z-index: -1;
  height: 100vh;
  min-height: 916px;
  background-color: ${props => props.theme.darkBG};
  width: 30%;
  float: left;
  color: ${props => props.theme.panelContent};
  @media (max-width: 1339px) {
    width: 100%;
  }
`;

Wrapper.defaultProps = {
  theme: {
    darkBG: '#AFC5CC',
    panelContent: '#FFFFFF',
  },
};

export default DetailPanel;
