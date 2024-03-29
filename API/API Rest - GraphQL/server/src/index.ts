import 'regenerator-runtime/runtime';
import express from 'express';
import path from 'path';
import { ApolloServer, gql } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import { typeDefs, resolvers } from './db/graphql';

const PORT = 3000;

(async function () {
  const app = express();
  app.use(express.json());
  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await graphqlServer.start();
  graphqlServer.applyMiddleware({ app });

  const publicPath = path.resolve(__dirname, './public');
  app.use(express.static(publicPath));
  /*  app.use('/api/hotels', hotelApi);
  app.use('/api/cities', cityApi); */

  app.listen(PORT, () => {
    console.log(
      `GraphQL server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
    );
  });
})();
