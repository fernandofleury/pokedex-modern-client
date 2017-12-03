import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import client from '../client';
import { Pokemon } from '../types/pokemon';
import * as storage from '../utils/storage';

const ALL_POKEMONS = 'all_pokemons';

const query = `
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
}`;

interface Response {
  pokemons: Pokemon[];
}

const parseResponse = (response: ApolloQueryResult<Response>) => {
  return response.data.pokemons;
};

const storeResponse = (response: Pokemon[]) => {
  if (response.length) {
    storage.add(ALL_POKEMONS, response);
  }

  return response;
};

const handleError = () => [];

const getPokemons = (): Promise<Pokemon[]> => {
  if (storage.has(ALL_POKEMONS)) {
    return Promise.resolve(storage.get(ALL_POKEMONS));
  }

  return client
    .query({ query: gql(query) })
    .then(parseResponse)
    .then(storeResponse)
    .catch(handleError);
};

export default getPokemons;
