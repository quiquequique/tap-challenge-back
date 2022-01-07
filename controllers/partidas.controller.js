const { tableroGuardado, guardarPartida } = require('../services/db.partidas');
const { PartidaNueva } = require('../services/creaPartida');

const controller = {

  buscarPartida: async (req, res) => {
    const { id } = req.params;
    if (id === undefined) {
      const tablero = new PartidaNueva();
      res.send(tablero);
    } else {
      try {
        const tablero = await tableroGuardado(id);
        if (tablero) {
          const respuesta = {
            partidaId: tablero.dataValues.gameId,
            tablero: JSON.parse(tablero.dataValues.tableroGuardado),
          };
          res.send(respuesta);
        } else {
          const tablero2 = new PartidaNueva();
          res.send(tablero2);
        }
      } catch (err) {
        // agregar error
        res.send(err);
      }
    }
  },

  guardaPartida: async (req, res) => {
    const partidaInconclusa = req.body;
    try {
      // console.log(req.body);
      await guardarPartida(partidaInconclusa);
    } catch (err) {
      // agregar respuesta servidor
      console.log(err);
    }
    res.send('guardada partida');
  },

};

module.exports = controller;
