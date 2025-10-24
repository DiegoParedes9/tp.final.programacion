

const { productos } = require("./productos");
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

module.exports = { generarPedidos };

