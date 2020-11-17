const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Page Principal')
});

app.listen(port, () =>{
    console.log('Servicio Arrancado! http://localhost:${port}')
});