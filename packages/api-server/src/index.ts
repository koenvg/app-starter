import { QueryResolvers, MutationResolvers, Resolvers } from "./generated/models";
import { createTodo, deleteTodo, todos, updateTodo } from "./resolvers/todos";
import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";

const Query: QueryResolvers = {
  todos,
};

const Mutation: MutationResolvers = {
  createTodo,
  deleteTodo,
  updateTodo,
};

const resolvers: Resolvers = {
  Query,
  Mutation,
};

const typeDefs = importSchema(`${__dirname}/api.graphql`);

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
