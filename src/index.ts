import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-ts';
import resolvers from './resolvers';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        db: prisma
    })
} as any);

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        }
    },
    () => console.log('Server is running on http://localhost:4000')
);
