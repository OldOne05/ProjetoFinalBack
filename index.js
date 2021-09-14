const express = require('express');
const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn');

Conn("localhost", 27017, "tarefas");

const port = 3000;

const tarefa = require("./routes/tarefas.routes");
app.use("/tarefas",tarefa);

app.get('*', function(req, res){
  res.status(404).send("Não encontrado");
});

app.get('*', function(req, res){
  res.status(201).send("Não encontrado");
});

app.listen(port, ()=> {
  console.info(`Servidor rodando na porta http://localhost:${port}/`);
})