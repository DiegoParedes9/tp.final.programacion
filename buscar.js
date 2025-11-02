const prompt = require("prompt-sync")({ sigint: true });

const { productos } = require("./productos");

function buscarPorTipo() {

  let tipoProducto = prompt("Ingrese el tipo de producto que quiere buscar (Celular, Televisor, Consola, Auricular): ");

  console.log("Resultados: " + tipoProducto + " ");

  let encontrados = 0;
  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    if (p.tipo.toLowerCase() === tipoProducto.toLowerCase()) {
      console.log("- " + p.nombre + " (" + p.modelo + ") | Marca: " + p.marca + " | Precio: $" + p.precio + " | Cantidad: " + p.cantidad);
      encontrados++;
    }
  }

  if (encontrados === 0) {
    console.log("No se encontraron productos de ese tipo.");
  }
}

module.exports = { buscarPorTipo };
