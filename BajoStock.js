
const { productos } = require("./productos");
function bajoStock() {
  console.log("\n Productos con bajo stock (menos de 5 unidades):\n");

  let hayBajoStock = false;
  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    if (p.cantidad < 5) {
      console.log("- " + p.nombre + " (" + p.tipo + ") | Marca: " + p.marca + " | Cantidad: " + p.cantidad);
      hayBajoStock = true;
    }
  }

  if (!hayBajoStock) {
    console.log(" No hay productos con bajo stock.");
  }
}

module.exports = { bajoStock };