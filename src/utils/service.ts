import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: `http://localhost:1337/graphql`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
  },
});

class Service {
  static apollo = apolloClient;
}

export default Service;
