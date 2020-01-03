const hbs = require('hbs');
//helpers
hbs.registerHelper('getanio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((pa, idx) => {
        palabras[idx] = pa.charAt(0).toUpperCase() + pa.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});