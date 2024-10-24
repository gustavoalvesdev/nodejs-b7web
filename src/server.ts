import { createServer, ServerResponse } from 'node:http';

/**
 * Função que cria um servidor HTTP.
 * 
 * @param {IncomingMessage} req - Dados que a requisição receberá
 * @param {ServerResponse} res -  Resposta da requisição
 */

const nomeMedico = 'Pedro Lemos';
const especialidadeMedico = 'Oftamologista';

const server = createServer((req, res) => {

    // Exibe um texto como resposta e fim da requisição
    res.end(`Dr. ${nomeMedico} | ${especialidadeMedico}`);

});

/*
    Atrelar o servidor a uma porta específica (3000, nesse caso)
    A arrow function do segundo parâmetro é opcional, apenas para mensagens de feedback
 */
server.listen(3000, () => {
    console.log('Servidor funcionando em http://localhost:3000');
});