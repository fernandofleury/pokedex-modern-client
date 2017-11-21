interface IColors {
  white: string;
  black: string;
  gray: string;
  red: string;
}

interface ITypes {
  grass: string;
  poison: string;
  electric: string;
  fire: string;
  water: string;
  normal: string;
  flying: string;
  bug: string;
  steel: string;
  dragon: string;
  fairy: string;
  dark: string;
  ghost: string;
  ground: string;
  rock: string;
  psychic: string;
  ice: string;
  fighting: string;
}

export const colors: IColors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#f3f3f3',
  red: '#dd0b2d'
};

export const types: ITypes = {
  grass: '#78c850',
  poison: '#a040a0',
  electric: '#f8d030',
  fire: '#f08030',
  water: '#6890f0',
  flying: '#a890f0',
  bug: '#a8b820',
  normal: '#a8a878',
  ground: '#e0c068',
  fairy: '#ee99ac',
  fighting: '#c03028',
  psychic: '#f85888',
  steel: '#b8b8d0',
  ice: '#98d8d8',
  ghost: '#705898',
  rock: '#b8A038',
  dragon: '#7038f8',
  dark: '#705848'
};
