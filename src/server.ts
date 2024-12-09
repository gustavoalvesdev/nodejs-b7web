import express, { urlencoded } from 'express';
import helmet from 'helmet';
import path from 'path';

// servidor express
const server = express();

// Usar o Helmet como middleware no EXpress
server.use(helmet());
// middleware de respostas JSON no Express
server.use(express.json());
// middleware do Express para lidar com os dados da requisição
server.use(express.urlencoded({extended: true}));
// middleware para configurar a pasta ./public da aplicação
server.use(express.static(path.join(__dirname, '../public')));

// requisição get
server.get('/', (req, res) => {

    let name: string = 'Gustavo';
    let age: number = 33;

    // retornar um json
    res.json({name, age});
});

// porta que vai rodar o servidor
server.listen('3000', () => {
    console.log('Servidor está rodando no link: http://localhost:3000');
});