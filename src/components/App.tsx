import * as React from 'react';
import { injectGlobal } from 'styled-components';
import Header from './Header';
import PokemonList from './PokemonList';

// tslint:disable-next-line
injectGlobal`
  html {
    font-family: Arial, Helvetica, Sans-serif;
  }
`;

const App = () => (
  <div>
    <Header />
    <PokemonList />
  </div>
);

export default App;
