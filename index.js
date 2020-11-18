const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port',process.env.PORT || 3000);
app.set('json space', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/contact_routes'));

app.listen(app.get('port'), () => {
    console.log('server iniciado');
});