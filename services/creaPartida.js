class PartidaNueva {
  constructor() {
    this.partidaId = Math.floor(new Date().valueOf() * Math.random());
    this.tablero = [];

    // agrega los casilleros del tablero al array resumido a nivel principiante (8 x 8)

    for (let i = 0; i < 64; i++) {
      this.tablero.push({
        value: 0,
        tapada: true,
      });
    }

    // coloca 10 bombas al azar

    const posicionBomba = [];

    while (posicionBomba.length < 10) {
      const posicion = Math.floor(Math.random() * 64);
      if (!posicionBomba.includes(posicion)) {
        posicionBomba.push(posicion);
      }
    }

    this.tablero.forEach((obj, index) => {
      if (posicionBomba.includes(index)) {
        // eslint-disable-next-line no-param-reassign
        obj.value = '#';
      }
    });

    // suma las cercanias segun los distintos casos posibles, (esquinas, lineas laterales, etc)

    this.tablero.forEach((obj, index) => {
      if (obj.value === '#') {
        switch (index) {
          case 0:
            if (this.tablero[1].value !== '#') {
              this.tablero[1].value += 1;
            }
            if (this.tablero[8].value !== '#') {
              this.tablero[8].value += 1;
            }
            if (this.tablero[9].value !== '#') {
              this.tablero[9].value += 1;
            }
            break;
          case 7:
            if (this.tablero[6].value !== '#') {
              this.tablero[6].value += 1;
            }
            if (this.tablero[14].value !== '#') {
              this.tablero[14].value += 1;
            }
            if (this.tablero[15].value !== '#') {
              this.tablero[15].value += 1;
            }
            break;
          case 56:
            if (this.tablero[57].value !== '#') {
              this.tablero[57].value += 1;
            }
            if (this.tablero[49].value !== '#') {
              this.tablero[49].value += 1;
            }
            if (this.tablero[48].value !== '#') {
              this.tablero[48].value += 1;
            }
            break;
          case 63:
            if (this.tablero[62].value !== '#') {
              this.tablero[62].value += 1;
            }
            if (this.tablero[55].value !== '#') {
              this.tablero[55].value += 1;
            }
            if (this.tablero[54].value !== '#') {
              this.tablero[54].value += 1;
            }
            break;
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            if (this.tablero[index - 1].value !== '#') {
              this.tablero[index - 1].value += 1;
            }
            if (this.tablero[index + 1].value !== '#') {
              this.tablero[index + 1].value += 1;
            }
            if (this.tablero[index + 7].value !== '#') {
              this.tablero[index + 7].value += 1;
            }
            if (this.tablero[index + 8].value !== '#') {
              this.tablero[index + 8].value += 1;
            }
            if (this.tablero[index + 9].value !== '#') {
              this.tablero[index + 9].value += 1;
            }
            break;
          case 57:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
            if (this.tablero[index - 1].value !== '#') {
              this.tablero[index - 1].value += 1;
            }
            if (this.tablero[index + 1].value !== '#') {
              this.tablero[index + 1].value += 1;
            }
            if (this.tablero[index - 7].value !== '#') {
              this.tablero[index - 7].value += 1;
            }
            if (this.tablero[index - 8].value !== '#') {
              this.tablero[index - 8].value += 1;
            }
            if (this.tablero[index - 9].value !== '#') {
              this.tablero[index - 9].value += 1;
            }
            break;
          case 8:
          case 16:
          case 24:
          case 32:
          case 40:
          case 48:
            if (this.tablero[index + 1].value !== '#') {
              this.tablero[index + 1].value += 1;
            }
            if (this.tablero[index - 7].value !== '#') {
              this.tablero[index - 7].value += 1;
            }
            if (this.tablero[index - 8].value !== '#') {
              this.tablero[index - 8].value += 1;
            }
            if (this.tablero[index + 8].value !== '#') {
              this.tablero[index + 8].value += 1;
            }
            if (this.tablero[index + 9].value !== '#') {
              this.tablero[index + 9].value += 1;
            }
            break;
          case 15:
          case 23:
          case 31:
          case 39:
          case 47:
          case 55:
            if (this.tablero[index - 1].value !== '#') {
              this.tablero[index - 1].value += 1;
            }
            if (this.tablero[index + 7].value !== '#') {
              this.tablero[index + 7].value += 1;
            }
            if (this.tablero[index + 8].value !== '#') {
              this.tablero[index + 8].value += 1;
            }
            if (this.tablero[index - 8].value !== '#') {
              this.tablero[index - 8].value += 1;
            }
            if (this.tablero[index - 9].value !== '#') {
              this.tablero[index - 9].value += 1;
            }
            break;

          default:
            if (this.tablero[index - 1].value !== '#') {
              this.tablero[index - 1].value += 1;
            }
            if (this.tablero[index + 1].value !== '#') {
              this.tablero[index + 1].value += 1;
            }
            if (this.tablero[index + 7].value !== '#') {
              this.tablero[index + 7].value += 1;
            }
            if (this.tablero[index + 8].value !== '#') {
              this.tablero[index + 8].value += 1;
            }
            if (this.tablero[index + 9].value !== '#') {
              this.tablero[index + 9].value += 1;
            }
            if (this.tablero[index - 7].value !== '#') {
              this.tablero[index - 7].value += 1;
            }
            if (this.tablero[index - 8].value !== '#') {
              this.tablero[index - 8].value += 1;
            }
            if (this.tablero[index - 9].value !== '#') {
              this.tablero[index - 9].value += 1;
            }
        }
      }
    });
  }
}

module.exports = { PartidaNueva };
