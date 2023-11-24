const express = require('express')
const rotas = express()

//cadastro, login, atualização e detalhamento de usuário:
rotas.post('/usuario')
rotas.post('/login')
rotas.get('/usuario')
rotas.put('/usuario')

//categorias:
rotas.get('/categoria')

//transacões bancárias:
rotas.get('transacao')
rotas.get('/transacao/:id')
rotas.post('/transacao')
rotas.post('/transacao/:id')
rotas.post('/transacao/:id')
rotas.get('/transacao/extrato')

module.exports = {
    rotas
}