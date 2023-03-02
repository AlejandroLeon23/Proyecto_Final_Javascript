
// Import Ingreso and Egreso classes
const Ingreso = require('./Ingreso.js');
const Egreso = require('./Egreso.js');

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

class totalIngresos {
  constructor(ingresos) {
    this.ingresos = ingresos;
  }

  calcularTotalIngresos() {
    let totalIngresos = 0;
    for (const ingreso of this.ingresos) {
      totalIngresos += ingreso.valor;
    }
    return totalIngresos;
  }
}

class totalEgresos {
  constructor(egresos) {
    this.egresos = egresos;
  }

  calcularTotalEgresos() {
    let totalEgresos = 0;
    for (const egreso of this.egresos) {
      totalEgresos += egreso.valor;
    }
    return totalEgresos;
  }
}
const formatoMoneda = (valor) => {
  return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
  };

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
  };
// Crea la función cargarCabecero
const cargarCabecero = () => {
const presupuesto = totalIngresos() - totalEgresos();
const porcentajeEgreso = totalEgresos() / totalIngresos();
  console.log(`Presupuesto: ${formatoMoneda(presupuesto)}`);
  console.log(`Porcentaje de egreso: ${formatoPorcentaje(porcentajeEgreso)}`);
  console.log(`Total de ingresos: ${formatoMoneda(totalIngresos())}`);
  console.log(`Total de egresos: ${formatoMoneda(totalEgresos())}`);
  };