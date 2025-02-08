import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
// import booksRouter from './routes/booksRoute.js';
import cors from 'cors';
const User = require('./models/User');
const Workforce = require('./models/Workforce');
const Inventory = require('./models/Inventory');
const Budget = require('./models/Budget');


const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for handling CORS policy
app.use(cors());

app.get('/', (request, response) => {
    response.status(234).send('Hello World!');
});

// app.use('/books', booksRouter)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB: ', error);
    });