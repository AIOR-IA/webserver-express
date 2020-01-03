const http = require('http');
http.createServer((request, response) => {

        let datos = {
            nombre: 'Lenar',
            edad: 20,
            dir: 'Av Oquendo'
        }
        response.write(JSON.stringify(datos));
        response.end();

    })
    .listen(33066);
console.log('Escuchando el puerte 8080');