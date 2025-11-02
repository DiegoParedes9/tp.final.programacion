const { productos } = require("./productos");
const { bajoStock } = require("./bajostock");

function realizarPedidos() {
  
let hayPedidos = false;


  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    if (p.cantidad < 10) {
      let cantidadReponer = 10 - p.cantidad;
      console.log("te recomiendo pedir " + cantidadReponer + " unidades de: " + p.nombre + " a " + p.proveedor + ". (Stock actual: " + p.cantidad + ")");
      hayPedidos = true;
    }
  }

  if (!hayPedidos) {
    console.log("El stock esta completo");
  }
}

module.exports = { realizarPedidos };