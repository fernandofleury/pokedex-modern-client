import * as React from 'react';
import { graphql } from 'react-apollo';
import LazyLoad, { forceCheck } from 'react-lazyload';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { IPokemon } from '../types/pokemon';
import Pokemon from './Pokemon';
import PokemonPlaceholder from './PokemonPlaceholder';

interface IResponse {
  pokemons: IPokemon[];
}

interface IProps {
  data: {
    pokemons: IPokemon[];
  };
}

const StyledDiv = styled.div`
  margin-top: 48px;
  text-align: center;
`;

class PokemonList extends React.Component<IProps> {
  public componentWillReceiveProps(nextProps) {
    setTimeout(forceCheck, 0);
  }

  public render() {
    const { data: { pokemons } } = this.props;

    if (!pokemons || !pokemons.length) {
      return null;
    }

    return (
      <StyledDiv>
        {pokemons.map(pokemon => (
          <LazyLoad
            key={pokemon.id}
            placeholder={<PokemonPlaceholder />}
            height={140}
            offset={200}
            once
          >
            <Pokemon {...pokemon} />
          </LazyLoad>
        ))}
      </StyledDiv>
    );
  }
}

const withPokemon = graphql<IResponse>(
  gql`
    {
      pokemons(start: 1, end: 802) {
        name
        id
        types
        sprites {
          default
          shiny
        }
      }
    }
  `
) as any;

export default withPokemon(PokemonList);
