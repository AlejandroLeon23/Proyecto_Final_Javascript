// Importa la clase padre Dato desde el archivo Dato.js
import { Dato } from "./Dato.js";

// Define la clase Ingreso que extiende de la clase Dato
export class Ingreso extends Dato {
  // Define la variable estática contadorIngresos e iguálala a 0
  static contadorIngresos = 0;

  // Define el constructor de la clase que recibe los parámetros descripción y valor
  constructor(descripcion, valor) {
    // Invoca al constructor de la clase padre con super()
    super(descripcion, valor);

    // Define el atributo _id con el valor de la variable estática contadorIngresos preincrementada
    this.id = ++Ingreso.contadorIngresos;
  }

  // Crea el método get id, el cual regresa el valor de this._id
  get id() {
    return this.id;
  }
}
