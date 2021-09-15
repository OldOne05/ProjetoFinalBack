if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200,
}

const port = 3000;

const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn');

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

const tarefaRouter = require("./routes/tarefas.routes");
app.use("/tarefas",tarefaRouter);

app.get('*', function(req, res){
  res.status(404).send("Não encontrado");
});

app.get('*', function(req, res){
  res.status(201).send("Criado");
});

app.listen(port, ()=> {
  console.info(`Servidor rodando na porta http://localhost:${port}/`);
})