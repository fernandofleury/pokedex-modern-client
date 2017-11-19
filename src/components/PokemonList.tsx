import * as React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { IPokemon } from '../types/pokemon';
import Pokemon from './Pokemon';

interface IResponse {
  pokemons: IPokemon[];
}

interface IProps {
  data: {
    pokemons: IPokemon[];
  };
}

const PokemonList = ({ data: { pokemons = [] } }: IProps) =>
  pokemons.map(pokemon => <Pokemon key={pokemon.id} {...pokemon} />);

const withPokemon = graphql<IResponse>(
  gql`
    {
      pokemons(start: 1, end: 20) {
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
