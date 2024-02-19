const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const typeDefs = require('schemas');
const resolvers = require('resolvers');

const DB_HOST = "@cluster0.cgp3cde.mongodb.net";
const DB_USER = "admin";
const DB_PASSWORD = "Password";
const DB_NAME = "W2024_COMP3133_ASSIGNMENT1";
const DB_CONNECTION = `mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    w: 'majority'
}).then(() => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Error Mongodb connection', err)
});

const app = express();
app.use(express.json());

const server = new ApolloServer({
    typeDefs,
    resolvers
});

async function startServer() {
    await server.start();
    server.applyMiddleware({ app, path: '/graphQL' });
}

const SERVER_PORT = 3000;
startServer().then(() => {
    app.listen(SERVER_PORT, () => {
        console.log(`Server running at http://localhost:${SERVER_PORT}/`);
    });
}).catch(error => {
    console.error('Error starting server:', error);
});
