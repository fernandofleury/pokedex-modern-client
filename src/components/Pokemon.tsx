import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { colors } from '../styles/variables';
import generateBackground from '../styles/generateBackground';

interface IProps {
  name: string;
  id: number;
  types: string[];
  sprites: {
    default: string;
    shiny: string;
  };
}

const StyledItem = styled.div`
  background: ${(props: { background?: string }) =>
    props.background || colors.gray};
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

const StyledImg = styled.img`
  display: block;
  margin: auto;
  max-width: 96px;
  width: 100%;
`;

const StyledTitle = styled.div`
  background-color: ${transparentize(0.65, colors.black)};
  color: white;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

class Pokemon extends React.PureComponent<IProps> {
  public render() {
    const { name, types, sprites } = this.props;

    return (
      <StyledItem background={generateBackground(types)}>
        <StyledImg src={sprites.default} />
        <StyledTitle>{name}</StyledTitle>
      </StyledItem>
    );
  }
}

export default Pokemon;
