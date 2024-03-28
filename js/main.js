const Plato = function(nombre, tipo, precio) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
  };
  
   const platos = [];
  
    const agregarPlato = function() {
    const nombre = prompt("Ingrese el nombre del plato:");
    const tipo = prompt("Ingrese el tipo del plato (carnes, salados, veganos o agridulce):");
    const precio = parseFloat(prompt("Ingrese el precio del plato:"));
  
    const nuevoPlato = new Plato(nombre, tipo, precio);
    platos.push(nuevoPlato);
  
    console.log(`¡Plato "${nombre}" agregado con éxito!`);
  };
  
    const mostrarPlatosPorTipo = function(tipo) {
    const platosFiltrados = platos.filter(plato => plato.tipo === tipo);
    console.log(`Platos ${tipo}:`);
    platosFiltrados.forEach(plato => {
      console.log(`${plato.nombre} - $${plato.precio}`);
    });
  };
  
   const mostrarTodosLosPlatos = function() {
    console.log("Todos los platos:");
    platos.forEach(plato => {
      console.log(`${plato.nombre} - Tipo: ${plato.tipo}, Precio: $${plato.precio}`);
    });
  };
  
   platos.push(new Plato('Filete de res', 'carnes', 15.99));
  platos.push(new Plato('Sándwich de jamón y queso', 'salados', 7.99));
  platos.push(new Plato('Ensalada de quinoa', 'veganos', 9.99));
  platos.push(new Plato('Pollo agridulce', 'agridulce', 12.99));
  
    let opcion;
  do {
    opcion = prompt(`Bienvenido al Portal de Comidas\n
      1. Agregar nuevo plato
      2. Mostrar platos por tipo
      3. Mostrar todos los platos
      4. Salir`);
  
    switch(opcion) {
      case '1':
        agregarPlato();
        break;
      case '2':
        const tipo = prompt("Ingrese el tipo de plato para mostrar (carnes, salados, veganos o agridulce):");
        mostrarPlatosPorTipo(tipo);
        break;
      case '3':
        mostrarTodosLosPlatos();
        break;
      case '4':
        console.log("Gracias por usar el Portal de Comidas. ¡Hasta luego!");
        break;
      default:
        console.log("Opción inválida. Por favor, elija una opción válida.");
    }
  } while(opcion !== '4');
  