import {ApolloServer} from "apollo-server-lambda";
import resolvers from "./resolvers";
import typeDefs from "@public-badges/graphql-schema";
import context from "./context";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  playground: {
    endpoint: "/dev/graphql",
  },
});

export const graphql = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});

export default graphql;
