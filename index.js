const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors')
//setting
app.set('port',process.env.PORT || 3021);
app.set('json space', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
//routes
app.use(require('./routes/contact_routes'));
//starting server
app.listen(app.get('port'), () => {
    console.log('server iniciado');
});