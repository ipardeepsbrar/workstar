const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());


const port = process.env.PORT || 5000
const connect = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI);
        await app.listen(port);
        console.log('DB connected and server listening...');
    } catch (error) {
        console.log('DB ERROR or SERVER LISTENING ERROR...');
        console.log(error);
    }
}

connect();