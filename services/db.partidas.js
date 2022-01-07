/* eslint-disable no-useless-catch */
/* eslint-disable no-console */

const { Tablero } = require('../database/models');

const tableroExist = async (id) => {
  const exist = await Tablero.findOne({ where: { gameId: id } });

  return !!exist;
};

const tableroGuardado = async (id) => {
  try {
    const exist = await tableroExist(id);
    if (exist) {
      const tablero = await Tablero.findOne({ where: { gameId: id } });
      return tablero;
    }
    return false;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const guardarPartida = async (partida) => {

  console.log(partida);
  const { partidaId } = partida;
  const { tablero } = partida;
  // const partidaParseada = JSON.parse(partidaAGuardar);
  // console.log(`partida guardada: ${partidaParseada.partidaId}`);
  const paraGuardar = {
    gameId: partidaId,
    tableroGuardado: tablero,
  };
  try {
    const guardarJuego = await Tablero.create(paraGuardar);
    return guardarJuego;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  tableroExist,
  tableroGuardado,
  guardarPartida,
};
