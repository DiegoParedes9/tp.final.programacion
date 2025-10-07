//Control de Stock en una Tienda de Electrónica con Proveedores: Desarrolla una
//aplicación que gestione el stock de una tienda de electrónica. Los productos tienen
//nombre, marca, tipo (teléfono, laptop, etc.), cantidad disponible y proveedor.
//Implementa un sistema de proveedores que suministran los productos. Permite buscar
//productos por tipo, ver qué productos están en bajo stock y generar pedidos a los proveedores.



let proveedores = [];
let clientes = [];
let ventas = [];
let nextProductoId = 1;
let nextProveedorId = 1;
let nextClienteId = 1;
let nextVentaId = 1;

// Lista de productos iniciales
let productosIniciales = [
    { nombre: "PlayStation 5", tipo: "consola", precio: 600, stock: 5 },
    { nombre: "Xbox Series X", tipo: "consola", precio: 550, stock: 4 },
    { nombre: "iPhone 15", tipo: "celular", precio: 900, stock: 3 },
    { nombre: "Samsung Galaxy S24", tipo: "celular", precio: 850, stock: 6 },
    { nombre: "LG 55-inch 4K TV", tipo: "televisor", precio: 700, stock: 2 },
    { nombre: "Sony Bravia 65-inch", tipo: "televisor", precio: 1200, stock: 1 },
    { nombre: "Sony WH-1000XM5", tipo: "auriculares", precio: 350, stock: 8 },
    { nombre: "JBL Live 660NC", tipo: "auriculares", precio: 150, stock: 7 }
];

console.log("Lista de productos:", productosIniciales);

export function buscarProductoPorTipo(tipo) {
    return productosIniciales.filter(p => p.tipo === tipo);
}






const prompt = require("prompt-sync")({ sigint: true });


let productos = [
  
  { tipo: "Celular", nombre: "Galaxy S24", modelo: "S24 Ultra", marca: "Samsung", precio: 1200, cantidad: 3, proveedor: "Samsung" },
  { tipo: "Celular", nombre: "iPhone 15", modelo: "Pro Max", marca: "Apple", precio: 1500, cantidad: 6, proveedor: "Apple" },

  
  { tipo: "Televisor", nombre: "Smart TV 50\"", modelo: "Crystal UHD", marca: "Samsung", precio: 800, cantidad: 2, proveedor: "Samsung" },
  { tipo: "Televisor", nombre: "Bravia 55\"", modelo: "X90J", marca: "Sony", precio: 950, cantidad: 4, proveedor: "Sony" },

  
  { tipo: "Consola", nombre: "PlayStation 5", modelo: "PS5 Slim", marca: "Sony", precio: 700, cantidad: 5, proveedor: "Sony" },
  { tipo: "Consola", nombre: "Xbox Series X", modelo: "Series X", marca: "Microsoft", precio: 650, cantidad: 3, proveedor: "Microsoft" },

  
  { tipo: "Laptop", nombre: "Dell XPS 13", modelo: "9320", marca: "Dell", precio: 1100, cantidad: 8, proveedor: "Dell" },
  { tipo: "Laptop", nombre: "MacBook Air", modelo: "M3", marca: "Apple", precio: 1300, cantidad: 2, proveedor: "Apple" },

  
  { tipo: "Auricular", nombre: "AirPods Pro", modelo: "2da Gen", marca: "Apple", precio: 250, cantidad: 10, proveedor: "Apple" },
  { tipo: "Auricular", nombre: "Galaxy Buds 3", modelo: "Pro", marca: "Samsung", precio: 220, cantidad: 4, proveedor: "Samsung" }
];




function mostrarStock() {
  console.log("STOCK COMPLETO:\n");

  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    console.log(
      (i + 1) + ". " + p.tipo + " | " + p.nombre + " (" + p.modelo + ") - Marca: " +
      p.marca + " - Precio: $" + p.precio + " - Cantidad: " + p.cantidad +
      " - Proveedor: " + p.proveedor
    );
  }
}

function buscarPorTipo() {
  let tipoBuscado = prompt("Ingrese el tipo de producto a buscar (Celular, Televisor, Consola, Laptop, Auricular): ");
  console.log("\n🔍 Resultados para tipo: " + tipoBuscado + "\n");

  let encontrados = 0;
  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    if (p.tipo.toLowerCase() === tipoBuscado.toLowerCase()) {
      console.log("- " + p.nombre + " (" + p.modelo + ") | Marca: " + p.marca + " | Precio: $" + p.precio + " | Cantidad: " + p.cantidad);
      encontrados++;
    }
  }

  if (encontrados === 0) {
    console.log("No se encontraron productos de ese tipo.");
  }
}


function bajoStock() {
  console.log("\n⚠ Productos con bajo stock (menos de 5 unidades):\n");

  let hayBajoStock = false;
  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    if (p.cantidad < 5) {
      console.log("- " + p.nombre + " (" + p.tipo + ") | Marca: " + p.marca + " | Cantidad: " + p.cantidad);
      hayBajoStock = true;
    }
  }

  if (!hayBajoStock) {
    console.log("✅ No hay productos con bajo stock.");
  }
}


function generarPedidos() {
  console.log("Generando pedidos a proveedores:\n");

  let pedidos = 0;
  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    if (p.cantidad < 5) {
      console.log("➡ Pedido a " + p.proveedor + " para reponer \"" + p.nombre + "\" (" + p.tipo + ")");
      pedidos++;
    }
  }

  if (pedidos === 0) {
    console.log(" No hay productos que necesiten reposición.");
  }
}

console.log("SISTEMA DE CONTROL DE STOCK - TIENDA");


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
} while (opcion !== "5");
