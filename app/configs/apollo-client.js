import ApolloClient from 'apollo-boost';

const API_URI = 'https://afrik-postgres.herokuapp.com/graphql';

const client = new ApolloClient({
  uri: API_URI,
});

export default client;
