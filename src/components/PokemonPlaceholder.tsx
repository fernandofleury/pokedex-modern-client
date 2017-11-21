import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { colors } from '../styles/variables';

const StyledItem = styled.div`
  background: ${colors.gray};
  box-shadow: 0 1px 3px ${transparentize(0.88, colors.black)},
    0 1px 2px ${transparentize(0.76, colors.black)};
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  height: 140px;
  margin: 8px;
  width: 140px;

  @media screen and (max-width: 600px) {
    height: 120px;
    margin: 8px 4px;
    width: 120px;
  }
`;

export default StyledItem;
