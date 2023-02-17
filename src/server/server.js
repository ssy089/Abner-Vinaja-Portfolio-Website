const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser'); //Used for parsing request bodies
const cors = require('cors');              //Used for enabling CORS requests
const express = require('express');        //Used for creating the server
const port = 8081;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

/* Point the application instance to the folder containing the webpage files. */
app.use(express.static('./dist'));

/* Start the local server. */
const server = app.listen(port, function() {
  console.log('Trip Planner App is running on http://localhost:8081');
});
