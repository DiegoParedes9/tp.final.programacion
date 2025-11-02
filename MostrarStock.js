const { productos } = require("./productos");
function mostrarStock() {
  console.log("STOCK COMPLETO: ");

  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    console.log(
      (i + 1) + ". " + p.tipo + " | " + p.nombre + " (" + p.modelo + ") - Marca: " +
      p.marca + " - Precio: $" + p.precio + " - Cantidad: " + p.cantidad + " - Proveedor: " + p.proveedor);
  }
}
module.exports = { mostrarStock }