const express = require('express');

const server = express();

const db = require('./database');

server.use(express.json());

server.get('/', function(request, response) {
    const consulta = 'SELECT * FROM produtos';

    db.query(consulta, function(erro, resultado) {
        if (erro) {
            return response.json({erro: 'Erro na consulta do Banco de Dados'})
        }
        return response.json(resultado);
    });
    
   });


   server.get('/pedidos', function(request, response) {
    const consulta = 'SELECT * FROM pedidos';

    db.query(consulta, function(erro, resultado) {
        if (erro) {
            return response.json({erro: 'Erro na consulta do Banco de Dados'})
        }
        return response.json(resultado);
    });
    
   });


server.listen(8080, function(){
    console.log('Servidor ligado!!')
});

