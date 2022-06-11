const routes = require('express').Router();
const DeckController = require('../controllers/DeckController')

routes.get('/', DeckController.getAll);
routes.get("/cards/:id", DeckController.getById);
routes.get("/criar", DeckController.criar);
routes.post("/criacao", DeckController.criacao);
routes.get("/editar/:id", DeckController.editar1);
routes.post("/editar/:id", DeckController.editar);
routes.get("/deletar/:id", DeckController.deletar);

module.exports = routes;
