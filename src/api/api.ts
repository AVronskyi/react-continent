import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache()
});

export const GET_ALL_CONTINENTS = gql`
  query {
    continents {
      name
      countries {
        name
        languages {
          name
        }
      }
    }
  }
`;
