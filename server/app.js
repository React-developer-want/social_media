const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/posts');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// ALL MIDDILEWARES
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended:true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended:true }));
app.use(morgan('dev'));

// ALL ROUTES
app.use('/api/v1/posts', postRouter);

module.exports = app;