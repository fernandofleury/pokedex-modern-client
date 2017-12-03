import * as React from 'react';
import { injectGlobal } from 'styled-components';
import Header from '../Header';
import PokeList from '../PokeList';

// tslint:disable-next-line
injectGlobal`
  html {
    font-family: Arial, Helvetica, Sans-serif;
  }
`;

const App = () => (
  <div>
    <Header />
    <PokeList />
  </div>
);

export default App;
