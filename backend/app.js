const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());


// get all jobs
// get('/')

// all jobs by a user
// get('/provide-jobs/:userId)

// open a position
// post('/provide-jobs/open-position/:userId)

//apply for a job
// post('/apply/:jobId)



const port = process.env.PORT || 6000
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