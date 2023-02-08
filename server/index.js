const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config({path : './config.env'});

// DB CONNECTION
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(()=>{console.log("DB connection succesfully!")})

// SERVER CONNECTION
const PORT = process.env.PORT || 5000;
app.listen(PORT, async ()=>{
    console.log("server is happily running on port",PORT);
})

