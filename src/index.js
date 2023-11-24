const express = require('express')
const { rotas } = require('./routes/routes')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use(rotas)

app.listen(process.env.PORT, () => {
    console.log(`rodando na porta ${process.env.PORT}`)
})