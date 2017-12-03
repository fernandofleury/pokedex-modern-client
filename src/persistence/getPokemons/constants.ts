export const CACHE_KEY = 'all_pokemons';
export const QUERY = `
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
