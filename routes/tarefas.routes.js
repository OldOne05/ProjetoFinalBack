const express = require("express");
const router = express.Router();
const Tarefa = require("../models/tarefas");

router.post("/add", async (req, res) =>{
    await Tarefa.create(req.body)
    .then(() => {
        res.status(200).send("Tarefa Registrada");
    }).catch((err) => {
        res.status(400).send("Algo de errado ao adicionar, tente de novo.");
        console.error(err)
    })
});

router.get("/", async (req, res) => {
    await Tarefa.find({})
    .then((tarefa) => {
        res.status(200).send(tarefa)
    }).catch((err) => {
        res.status(400).send("Algo deu errado ao achar a lista, tente de novo.");
        console.error(err)
    })
});

router.get("/findById/:id", async (req, res) => {
    await Tarefa.find({_id : req.params.id})
    .then((tarefa) =>{
        res.status(200).send(musica);
    }).catch((err) => {
        res.status(400).send("Algo deu errado ao achar a tarefa, tente de novo.");
        console.error(err)
    })
})

router.put("/update/:id", async (req, res) => {
    await Tarefa.updateOne({_id : req.params.id}, req.body)
    .then(() => {
        res.status(200).send("Atualizado!!");
    }).catch((err) => {
        res.status(400).send("Algo deu erra;do ao atualizar, tente de novo.")
    })
})

router.delete("/delete/:id", async (req,res) => {
    await Tarefa.deleteOne({_id : req.params.id}, req.body)
    .then(() => {
        res.status(200).send("Deletado!!");
    }).catch((err) => {
        res.status(400).send("Algo deu errado com a exclusão, tente de novo.");
    })
})

module.exports = router;