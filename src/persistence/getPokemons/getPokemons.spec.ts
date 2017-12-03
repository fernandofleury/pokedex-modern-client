import getPokemons, {
  parseResponse,
  storeResponse,
  handleError
} from './index';
import * as constants from './constants';
import * as storage from '../../utils/storage';
import client from '../../client';

describe('getPokemons spec', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('parseResponse', () => {
    it('should return the pokemon array from the response', () => {
      const pokemons = [1, 2, 3];
      const response = {
        data: {
          pokemons
        }
      };

      expect(parseResponse(response as any)).toEqual(pokemons);
    });
  });

  describe('storeResponse', () => {
    describe('empty response', () => {
      it('should not store the response', () => {
        (storage as any).add = jest.fn();
        const response = [1, 2, 3];

        storeResponse([] as any);

        expect(storage.add).not.toHaveBeenCalled();
      });
    });

    it('should store the response', () => {
      (storage as any).add = jest.fn();
      const response = [1, 2, 3];

      storeResponse(response as any);

      expect(storage.add).toHaveBeenCalledWith(constants.CACHE_KEY, response);
    });
  });

  describe('handleError', () => {
    it('should shallow the error and return an empty array', () => {
      expect(handleError()).toEqual([]);
    });
  });

  describe('getPokemons', () => {
    describe('no response in cache', () => {
      it('should run the query and return the parsed response', async () => {
        const pokemons = [1, 2, 3];
        const response = {
          data: {
            pokemons
          }
        };

        (client as any).query = jest.fn(() => Promise.resolve(response));

        const result = await getPokemons();

        expect(result).toEqual(pokemons);
      });
    });
  });

  describe('response in cache', () => {
    it('should return the response from cache', async () => {
      const pokemons = [1, 2, 3];

      (storage as any).has = jest.fn(() => true);
      (storage as any).get = jest.fn(() => pokemons);

      const result = await getPokemons();

      expect(storage.has).toHaveBeenCalledWith(constants.CACHE_KEY);
      expect(storage.get).toHaveBeenCalledWith(constants.CACHE_KEY);
      expect(result).toEqual(pokemons);
    });
  });
});
