import express from 'express';

// servidor express
const server = express();

// requisição get
server.get('/', (req, res) => {

    let name: string = 'Gustavo';
    let age: number = 33;

    res.send(`Olá, meu nome é ${name} e eu tenho ${age} anos`);
});

// porta que vai rodar o servidor
server.listen('3000', () => {
    console.log('Servidor está rodando no link: http://localhost:3000');
});