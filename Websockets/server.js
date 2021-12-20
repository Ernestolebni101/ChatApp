const express = require("express");
const bodyParser = require("body-parser");
const response = require("./Network/response");
const app = express();
const router  = require('./Network/routes');
const db =  require('./db');
require('dotenv').config({path:'.env'});

//Database Connection
db(process.env.DB_CONNECT);

// General settings
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router);  // => Middleware express
app.listen(app.get('port'), () => {
    console.log(`Server Listen on localhost:${app.get('port')}`);
});

router(app);

// routing
app.use('/app',express.static('public'));
//const router = require('./Components/Messages/network');