const express = require('express')
const app = express()
const PORT = 3333

const db = require('./src/data/database')
db.connect()

app.use(express.json())

const moviesRouter = require('./src/routes/moviesRoutes')
app.use('/movies', moviesRouter)

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}, amiga, parabens`))