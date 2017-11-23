import * as React from 'react';
import { render } from 'react-dom';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import createClient from './client';
import registerWorker from './serviceWorker/registerWorker';
import App from './components/App';

const client = createClient();
registerWorker();

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
