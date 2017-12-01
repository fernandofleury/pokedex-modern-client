import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const indeterminate = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(250%);
  }
`;

const Wrapper = styled.div`
  height: 4px;
  left: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
`;

const Animation = styled.div`
  animation: 1s ${indeterminate} infinite ease-in-out;
  background-color: #2196f3;
  height: 100%;
  width: 40%;
`;

const Loader = () => (
  <Wrapper>
    <Animation />
  </Wrapper>
);

export default Loader;
