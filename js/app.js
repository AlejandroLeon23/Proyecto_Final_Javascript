
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
 new Ingreso ('Venta auto', 50000),
 new Ingreso ('Venta Tamales', 10000)
]



// Array Egresos
let egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800),
  new Egreso('Tacos', 35800)
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
  const presupuesto = totalIngresos() - totalEgresos();
  const porcentajeEgreso = totalEgresos() / totalIngresos();
  const presupuestoElement = document.getElementById('presupuesto');
  const porcentajeElement = document.getElementById('porcentaje');
  const ingresosElement = document.getElementById('ingresos');
  const egresosElement = document.getElementById('egresos');

  presupuestoElement.innerHTML = formatoMoneda(presupuesto);
  porcentajeElement.innerHTML = formatoPorcentaje(porcentajeEgreso);
  ingresosElement.innerHTML = formatoMoneda(totalIngresos());
  egresosElement.innerHTML = formatoMoneda(totalEgresos(presupuesto));
}

const cargarIngresos = () => {
  let ingresosHTML = '';

  for (const ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }

  const listaIngresos = document.getElementById('lista-ingresos');
  listaIngresos.innerHTML = ingresosHTML;
};
const cargarEgresos = () => {
  let egresosHTML = '';
  for (const egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }
  const listaEgresos = document.getElementById('lista-egresos');
  listaEgresos.innerHTML = egresosHTML;
}

const crearIngresoHTML = (ingreso) => {
  const ingresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${ingreso._descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso._valor)}</div>
        <div class="elemento_eliminar">
          <button class='elemento_eliminar--btn'>
            <ion-icon name='close-circle-outline'
            onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
          </button>
        </div>
      </div>
    </div>
  `;

  return ingresoHTML;
};
const crearEgresoHTML = (egreso) => {
  let egresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${egreso._descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egreso._valor)}</div>
        <div class="elemento_eliminar">
          <button class="elemento-eliminar--btn">
            <ion-icon class="close-circle-outline" 
            onclick="eliminarEgreso(${egreso.id})"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  `;
  return egresoHTML;
};

const eliminarEgreso = (id) => {
  const indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgresos();
};

const eliminarIngreso = (id) => {
  const indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgresos();
};

const agregarDato = () => {
  const forma = document.getElementById("forma");
  const tipo = document.getElementById("tipo").value;
  const descripcion = document.getElementById("descripcion").value;
  const valor = document.getElementById("valor").value;

  if (descripcion !== "" && valor !== "") {
    if (tipo === "ingreso") {
      ingresos.push(new Ingreso(descripcion, +valor));
      cargarCabecero();
      cargarIngresos();
    } else if (tipo === "egreso") {
      egresos.push(new Egreso(descripcion, +valor));
      cargarCabecero();
      cargarEgresos();
    }
  }
};

document.body.onload=cargarCabecero()
  
  //var boton1=document.getElementById("boton1")
  //boton1.addEventListener("click",cargarCabecero)