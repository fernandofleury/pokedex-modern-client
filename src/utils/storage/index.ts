export const add = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));

export const remove = (key: string) => localStorage.removeItem(key);

export const get = (key: string): any => JSON.parse(localStorage.getItem(key));

export const has = (key: string): boolean => !!localStorage.getItem(key);

export const clear = () => localStorage.clear();
