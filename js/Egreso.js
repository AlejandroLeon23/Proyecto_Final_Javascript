// Importar la calse dato
const Dato = require('./Dato');

//Hijo de dato
class Egreso extends Dato {
  static contadorEgresos = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor);
    this.id = ++Egreso.contadorEgresos;
  }

  get id() {
    return this.id;
  }
}

module.exports = Egreso;
