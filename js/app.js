
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
              // Crea la función cargarCabecero
                const cargarCabecero = () => {
                  const presupuesto = totalIngresos() - totalEgresos();
                  const porcentajeEgreso = totalEgresos() / totalIngresos();
                  console.log(presupuesto);
                  console.log(porcentajeEgreso);
                  console.log(totalIngresos());
                  console.log(totalEgresos());
                };