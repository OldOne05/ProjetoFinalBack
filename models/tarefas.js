const mongoose = require("mongoose");

const tarefaModel = new mongoose.Schema({
    titulo: { type:String, required: true },
    descricao: { type: String, required: true },
    prioridade: { type: String, required: true },
    status: { type: String, required: true },
})

const Tarefa = mongoose.model("tarefa", tarefaModel);

module.exports = Tarefa;