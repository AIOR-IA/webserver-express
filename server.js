const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//heroku
const port = process.env.PORT || 33066;

app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Lenar'
    });
});
app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Lenar',
    });
});
app.listen(port, () => {
    console.log(`Escuchando el puerto 33066 ${port}`);
})