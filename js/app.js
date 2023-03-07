
// Import Ingreso and Egreso classes
  // import { Ingreso } from './Ingreso';
  // import { Egreso } from './Egreso';
  class Dato {
    _descripcion
    _valor
    constructor(descripcion, valor) {
      this._descripcion = descripcion;
      this._valor = valor;
    }
  
    getDescripcion() {
      return this._descripcion;
    }
  
    setDescripcion() {
      this._descripcion = descripcion;
    }
  
    getValor() {
      return this._valor;
    }
  
    setValor(valor) {
      this._valor = valor;
    }
  }

  class Egreso extends Dato {
    // Define la variable estática contadorIngresos e iguálala a 0
    static _contadorEgresos = 0;
  
    // Define el constructor de la clase que recibe los parámetros descripción y valor
    constructor(descripcion, valor) {
      // Invoca al constructor de la clase padre con super()
      super(descripcion, valor);
  
      // Define el atributo _id con el valor de la variable estática contadorIngresos preincrementada
      this._id = ++Egreso._contadorEgresos;
    }
  
    // Crea el método get id, el cual regresa el valor de this._id
    getId() {
      return this._id;
    }
  }
    
    
  
  class Ingreso extends Dato {
    // Define la variable estática contadorIngresos e iguálala a 0
    static _contadorIngresos = 0;
  
    // Define el constructor de la clase que recibe los parámetros descripción y valor
    constructor(descripcion, valor) {
      // Invoca al constructor de la clase padre con super()
      super(descripcion, valor);
  
      // Define el atributo _id con el valor de la variable estática contadorIngresos preincrementada
      this._id = ++Ingreso._contadorIngresos;
    }
  
    // Crea el método get id, el cual regresa el valor de this._id
    getId() {
      return this._id;
    }
  }
  

// Array Ingresos
let ingresos = [
 new Ingreso ('Salario', 20000),
 new Ingreso ('Venta auto', 50000)
]



// Array Egresos
let egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800)
]


  const totalIngresos= () =>{
    let totalIngresos = 0;  
    for (const ingreso of ingresos) {
    totalIngresos += ingreso._valor;
    }
    return parseInt(totalIngresos);
  }


  const totalEgresos = () => {
    let totalEgresos = 0;
    for (const egreso of egresos) {
      totalEgresos += egreso._valor;
    }
    return parseInt(totalEgresos);
  }

const formatoMoneda = (valor) => {
  return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
  };

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
  };
// Crea la función cargarCabecero
const  cargarCabecero = () => {
  console.log(totalIngresos)
  console.log(totalEgresos)
  const presupuesto = totalIngresos() - totalEgresos();
  const porcentajeEgreso = totalEgresos() / totalIngresos();
  console.log(`Presupuesto: ${formatoMoneda(presupuesto)}`);
  console.log(`Porcentaje de egreso: ${formatoPorcentaje(porcentajeEgreso)}`);
  console.log(`Total de ingresos: ${formatoMoneda(totalIngresos())}`);
  console.log(`Total de egresos: ${formatoMoneda(totalEgresos())}`);
}

  
  //var boton1=document.getElementById("boton1")
  //boton1.addEventListener("click",cargarCabecero)