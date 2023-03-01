// Crea la función totalIngresos
const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of Object.values(ingresos)) {
      totalIngreso += ingreso;
    }
    return totalIngreso;
  };
  
  // Crea la función totalEgresos
  const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of Object.values(egresos)) {
      totalEgreso += egreso;
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
  
  // Define los arreglos
  let egresos = {
    Renta: 900,
    Ropa: 400,
  };
  
  let ingresos = {
    Quincena: 9000,
    Venta: 400,
  };
  
  // Prueba la función cargarCabecero
  cargarCabecero();
  