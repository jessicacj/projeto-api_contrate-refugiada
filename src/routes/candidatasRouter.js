const express = require('express');
const router = express.Router();

const controller = require("../controllers/candidatasController")
 

router.post("/adicionar", controller.adicionarCandidatas)
router.get("/listar", controller.listarCandidatas)
router.get("/buscar/:id", controller.buscarCandidatasId)
router.patch("/alterar/:id", controller.alterarCandidatas)
router.delete ("/deletar/:id", controller.deletarCandidatas)

module.exports = router
