import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { colors } from '../styles/variables';
import generateBackground from '../styles/generateBackground';

interface Props {
  name: string;
  id: number;
  types: string[];
  sprites: {
    default: string;
    shiny: string;
  };
}

const Element = styled.div`
  background: ${(props: { background?: string }) =>
    props.background || colors.gray};
  box-shadow: 0 1px 3px ${transparentize(0.88, colors.black)},
    0 1px 2px ${transparentize(0.76, colors.black)};
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  height: 140px;
  margin: 8px;
  transition: opacity 0.3s ease-in-out;
  width: 140px;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    height: 120px;
    margin: 8px 4px;
    width: 120px;
  }
`;

const Image = styled.img`
  display: block;
  height: 96px;
  margin: auto;
  max-width: 96px;
  width: 100%;
`;

const Title = styled.div`
  background-color: ${transparentize(0.65, colors.black)};
  color: white;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
`;

const PokeThumb = ({ name, types, sprites }: Props) => (
  <Element background={generateBackground(types)}>
    <Image src={sprites.default} />
    <Title>{name}</Title>
  </Element>
);

export default PokeThumb;
