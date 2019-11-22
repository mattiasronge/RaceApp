const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require ('dotenv/config');

app.use(bodyParser.json());


//CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-with, Content-Type, Accept, Authorization");
 
    if(req.method === 'OPTIONS')  {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    
    }
    next();
}); 

//import routes
const racesRoute = require('./routes/races');

app.use ('/races', racesRoute);

// Routes
app.get('/', (req,res)  => {
    res.send('Home');
}); 

app.get('/races', (req,res)  => {
    res.send('Races');
});


//Connect DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,  useUnifiedTopology: true  },
 () => {
console.log('connected to DB');
})

//Listen to server
app.listen(3000);