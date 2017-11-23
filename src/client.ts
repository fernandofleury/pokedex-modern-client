import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { API } from './config';

const createClient = () =>
  new ApolloClient({
    link: new HttpLink({ uri: API }),
    cache: new InMemoryCache()
  });

export default createClient;
