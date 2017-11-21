import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const StyledHeader = styled.header`
  color: ${colors.white};
  background-color: ${colors.red};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  height: 48px;
  left: 0;
  line-height: 48px;
  position: fixed;
  text-indent: 16px;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const Header = () => <StyledHeader>Pokedex</StyledHeader>;

export default Header;
