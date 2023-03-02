
                // Define los arreglos
                let egresos =[
                  {
                    nombre:"renta",
                    valor: 900,
                  },
                  {
                    nombre:"ropa",
                    valor:400,
                  }
               ];

                let ingresos = [
                  {
                    nombre:"Quincena",
                    valor: 9000,
                  },
                  {
                    nombre:"venta",
                    valor:400,

                  }
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