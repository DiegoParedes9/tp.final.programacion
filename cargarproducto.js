
const prompt = require("prompt-sync")();
const { productos } = require("./productos");

function cargarProducto() {
  console.log("CARGAR PRODUCTO");

  let tipo = prompt("Tipo: ");
  let nombre = prompt("Nombre: ");
  let modelo = prompt("Modelo: ");
  let marca = prompt("Marca: ");
  let precio = Number(prompt("Precio: "));
  let cantidad = Number(prompt("Cantidad: "));
  let proveedor = prompt("Proveedor: ");

  let nuevoProducto = {
    tipo: tipo,
    nombre: nombre,
    modelo: modelo,
    marca: marca,
    precio: precio,
    cantidad: cantidad,
    proveedor: proveedor
  };

  productos.push(nuevoProducto);
  console.log("Producto agregado al stock.");
}

module.exports = { cargarProducto };