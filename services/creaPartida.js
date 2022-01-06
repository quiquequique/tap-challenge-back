class PartidaNueva {
  constructor() {
    this.partidaId = Math.floor(new Date().valueOf() * Math.random());
    this.tablero = [];
    const casilla = {
      value: 0,
      tapada: true,
    };
    for (let i = 0; i < 64; i++) {
      this.tablero.push(casilla);
    }
  }
}

module.exports = { PartidaNueva };
