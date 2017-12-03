import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import client from '../../client';
import { Pokemon } from '../../types/pokemon';
import * as storage from '../../utils/storage';
import * as constants from './constants';

interface Response {
  pokemons: Pokemon[];
}

export const parseResponse = (response: ApolloQueryResult<Response>) => {
  return response.data.pokemons;
};

export const storeResponse = (response: Pokemon[]) => {
  if (response.length) {
    storage.add(constants.CACHE_KEY, response);
  }

  return response;
};

export const handleError = () => [];

const getPokemons = (): Promise<Pokemon[]> => {
  if (storage.has(constants.CACHE_KEY)) {
    return Promise.resolve(storage.get(constants.CACHE_KEY));
  }

  return client
    .query({ query: gql(constants.QUERY) })
    .then(parseResponse)
    .then(storeResponse)
    .catch(handleError);
};

export default getPokemons;
