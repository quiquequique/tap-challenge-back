const express = require('express');
const { buscarPartida, guardaPartida } = require('../controllers/partidas.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', buscarPartida);
router.post('/', guardaPartida);

module.exports = router;
