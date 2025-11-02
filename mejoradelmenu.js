const prompt = require("prompt-sync")({ sigint: true });
const { mostrarStock } = require("./mostrarstock");
const { buscarPorTipo } = require("./buscar");
const { bajoStock } = require("./bajostock");
const { cargarProducto } = require("./cargarproducto");
const { realizarPedidos } = require("./realizarpedido");
const { eliminarProducto } = require("./eliminarproducto");
const { verProveedores } = require("./provedores");
let opcion = "";


do {
  
    console.log("==============================");
    console.log("SISTEMA DE CONTROL DE STOCK");
    console.log("==============================");
 



  console.log("1. Ver todo el stock");
  console.log("2. Buscar por tipo");
  console.log("3. Ver bajo stock");
  console.log("4. Cargar nuevo producto");
  console.log("5. Realizar pedidos sugeridos");
  console.log("6. Eliminar producto");
  console.log("7. Ver proveedores");
  console.log("8. Salir");

  opcion = prompt("Seleccione una opción: ");

  if (opcion === "1") {
  
    mostrarStock();

  } else if (opcion === "2") {
   
    buscarPorTipo();
   

  } else if (opcion === "3") {
    bajoStock();
    

  } else if (opcion === "4") {

    cargarProducto();
    
   

  } else if (opcion === "5") {
    realizarPedidos();
    console.log(" ir a cargar productos (opcion 4)");
   

  } else if (opcion === "6") {
    const seguro = prompt("¿Confirmás eliminar? (s/n): ").toLowerCase();
    if (seguro === "s" || seguro === "si" || seguro === "sí") {
      eliminarProducto();
    } else {
      console.log("Operación cancelada.");
    }
  } else if (opcion === "7") {
    verProveedores();

  } else if (opcion === "8") {
    console.log("Saliendo del sistema...");

  } else {
    console.log("Opción no válida, por favor intente nuevamente.");
    
  }
}
 while (opcion !== "8"); 