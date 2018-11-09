const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes')

let app = express();

app.use(cors()); // cors grabs data from outside server
app.use(express.json()); //like body parser, this must come before the routes

app.use('/api', mainRouter);


app.listen(3000);