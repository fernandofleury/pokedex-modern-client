import * as storage from './index';

describe('storage spec', () => {
  beforeEach(() => {
    storage.clear();
  });

  describe('add', () => {
    it('should add the key/value to the store', () => {
      const key = 'foo';
      const value = 'bar';

      storage.add(key, value);

      expect(storage.has(key)).toBeTruthy();
    });
  });

  describe('remove', () => {
    it('should remove the key/value from the store', () => {
      const key = 'foo';
      const value = 'bar';

      storage.add(key, value);
      storage.remove(key);

      expect(storage.has(key)).toBeFalsy();
    });
  });

  describe('get', () => {
    it('should return the value of the key', () => {
      const key = 'foo';
      const value = 'bar';

      storage.add(key, value);

      expect(storage.get(key)).toBe(value);
    });
  });

  describe('has', () => {
    it('should return a boolean whether or not the key exists', () => {
      const key = 'foo';

      expect(storage.has(key)).toBeFalsy();
    });
  });

  describe('clear', () => {
    it('should clear all keys', () => {
      const key = 'foo';
      const value = 'bar';

      storage.add(key, value);
      storage.clear();

      expect(storage.has(key)).toBeFalsy();
    });
  });
});
