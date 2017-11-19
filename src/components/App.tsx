import * as React from 'react';
import { injectGlobal } from 'styled-components';
import PokemonList from './PokemonList';

// tslint:disable-next-line
injectGlobal`
  html {
    font-family: Arial, Helvetica, Sans-serif;
  }
`;

const pokemons = [
  {
    name: 'Bulbasaur',
    id: 1,
    types: ['grass', 'poison'],
    sprites: {
      default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      shiny: ''
    }
  },
  {
    name: 'Pikachu',
    id: 20,
    types: ['electric'],
    sprites: {
      default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      shiny: ''
    }
  }
];

const App = () => <PokemonList pokemons={pokemons} />;

export default App;
