//Control de Stock en una Tienda de Electrónica con Proveedores: Desarrolla una
//aplicación que gestione el stock de una tienda de electrónica. Los productos tienen
//nombre, marca, tipo (teléfono, laptop, etc.), cantidad disponible y proveedor.
//Implementa un sistema de proveedores que suministran los productos. Permite buscar
//productos por tipo, ver qué productos están en bajo stock y generar pedidos a los proveedores.
const prompt = require("prompt-sync")();
const { productos } = require("./productos");
const { mostrarStock } = require("./MostrarStock");
const { buscarPorTipo } = require("./buscar");
const { bajoStock } = require("./BajoStock");
const { generarPedidos } = require("./pedidos"); 

let opcion = "";

do {
  console.log("\nMenú principal:");
  console.log("1. Ver todo el stock");
  console.log("2. Buscar por tipo");
  console.log("3. Ver bajo stock");
  console.log("4. Generar pedidos");
  console.log("5. Salir");

  opcion = prompt("\nSeleccione una opción: ");

  if (opcion === "1") {
    mostrarStock();
  } else if (opcion === "2") {
    buscarPorTipo();
  } else if (opcion === "3") {
    bajoStock();
  } else if (opcion === "4") {
    generarPedidos();
  } else if (opcion === "5") {
    console.log("Saliendo del sistema...");
  } else {
    console.log(" Opción no válida, intente nuevamente.");
  }
} while (opcion != "5");
