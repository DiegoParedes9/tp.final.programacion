const prompt = require("prompt-sync")();
const { productos } = require("./productos");

function eliminarProducto() {
  console.log("ELIMINAR PRODUCTO DEL STOCK");
  let nombreBuscado = prompt("Ingrese el nombre del producto a eliminar: ");

  let indice = -1;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
      indice = i;
    }
  }

  if (indice !== -1) {
    console.log("Producto eliminado:", productos[indice].nombre);
    productos.splice(indice, 1);
  } else {
    console.log("No hay productos con ese nombre.");
  }
}

module.exports = { eliminarProducto };