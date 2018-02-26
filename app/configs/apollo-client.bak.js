import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { InMemoryCache, } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { BatchHttpLink } from "apollo-link-batch-http";
import { persistCache } from 'apollo-cache-persist';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { RetryLink } from 'apollo-link-retry';
import { getMainDefinition } from 'apollo-utilities';
import localForage from 'localforage';

const SERVER_URI = 'https://afrik-postgres.herokuapp.com/graphql';
const SUBSCRIPTIONS_URI = 'wss://afrik-postgres.herokuapp.com/subscriptions';

const defaultState = {
  authenticatedUser: {
    __typename: 'User',
  },
};

const resolvers = {
  Mutation: {
    setAuthenticatedUser: (_, { user }, { cache }) => {
      cache.writeData({ data: { authenticatedUser: user } });

      return user;
    },
  },
};

const cache = new InMemoryCache();

const stateLink = withClientState({ cache, resolvers, defaults: defaultState });

const httpLink = new BatchHttpLink({ uri: SERVER_URI });

const retryLink = new RetryLink();

const middlewareLink = setContext(async () => ({
  headers: {
    'auth-token': await localForage.getItem('pa-DB__auth')
      .then((response) => {
        if (response) {
          return response.tokens.token;
        }
        return '';
      }),
    'auth-refresh-token': await localForage.getItem('pa-DB__auth')
      .then((response) => {
        if (response) {
          return response.tokens.refreshToken;
        }
        return '';
      }),
  },
}));

const devHttpLink = ApolloLink.from([
  middlewareLink,
  retryLink,
  stateLink,
  httpLink,
]);

const prodHttpLink = ApolloLink.from([
  middlewareLink,
  retryLink,
  stateLink,
  httpLink,
]);

const wsLink = new WebSocketLink({
  uri: SUBSCRIPTIONS_URI,
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  process.env.NODE_ENV !== 'production' ? devHttpLink : prodHttpLink,
);


persistCache({
  cache,
  storage: localForage,
});

const client = new ApolloClient({
  link,
  // eslint-disable-next-line no-underscore-dangle
  cache: cache.restore(window.__APOLLO_CLIENT__),
});

export default client;
