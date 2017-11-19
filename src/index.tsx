import * as React from 'react';
import { render } from 'react-dom';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import createClient from './client';
import App from './components/App';

const client = createClient();

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
