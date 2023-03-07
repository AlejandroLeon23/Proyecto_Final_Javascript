
// Import Ingreso and Egreso classes
// import { Ingreso } from './Ingreso';
// import { Egreso } from './Egreso';

// Array Ingresos
const ingresos = [
  new Ingreso('Salario', 20000),
  new Ingreso('Venta auto', 50000)
];

// Array Egresos
const egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800)
];


  const totalIngresos= () =>{
    let totalIngresos = 0;
    for (const ingreso of ingresos) {
      totalIngresos += ingreso.valor;
    }
    return totalIngresos;
  }


  const totalEgresos = () => {
    let totalEgresos = 0;
    for (const egreso of egresos) {
      totalEgresos += egreso.valor;
    }
    return totalEgresos;
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
  console.log(`Presupuesto: ${formatoMoneda(presupuesto)}`);
  console.log(`Porcentaje de egreso: ${formatoPorcentaje(porcentajeEgreso)}`);
  console.log(`Total de ingresos: ${formatoMoneda(totalIngresos())}`);
  console.log(`Total de egresos: ${formatoMoneda(totalEgresos())}`);
}
document.body.onload=cargarCabecero()
  
  //var boton1=document.getElementById("boton1")
  //boton1.addEventListener("click",cargarCabecero)