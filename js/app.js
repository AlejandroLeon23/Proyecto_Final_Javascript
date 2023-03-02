
// Import Ingreso and Egreso classes
const Ingreso = require('./Ingreso.js');
const Egreso = require('./Egreso.js');

// Create income array
const ingresos = [
  new Ingreso('Salario', 20000),
  new Ingreso('Venta auto', 50000)
];

// Create expense array
const egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800)
];

              // Crea la función totalIngresos
              const totalIngresos = () => {
                  let totalIngreso = 0;
                  for (let ingreso of ingresos) {
                    totalIngreso += ingreso.valor;
                  }
                  return totalIngreso;
                };
                
              // Crea la función totalEgresos
                const totalEgresos = () => {
                  let totalEgreso = 0;
                  for (let egreso of egresos) {
                    totalEgreso += egreso.valor;
                  }
                  return totalEgreso;
                };
                
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