var express  = require('express');

var app = express();

var login = require('./api/login');
app.use('/api',login);

const PORT = process.env.PORT || 3005;
app.listen(PORT,()=>console.log(`Listenning on port ${PORT}`));