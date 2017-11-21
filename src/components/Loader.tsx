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

const StyledWrapper = styled.div`
  height: 4px;
  left: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
`;

const AnimatedDiv = styled.div`
  animation: 1s ${indeterminate} infinite ease-in-out;
  background-color: #2196f3;
  height: 100%;
  width: 40%;
`;

const Loader = () => (
  <StyledWrapper>
    <AnimatedDiv />
  </StyledWrapper>
);

export default Loader;
