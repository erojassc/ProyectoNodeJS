const express = require('express');
const app = express();
const morgan = require('morgan');
//setting
app.set('port',process.env.PORT || 3000);
app.set('json space', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//routes
app.use(require('./routes/contact_routes'));
//starting server
app.listen(app.get('port'), () => {
    console.log('server iniciado');
});