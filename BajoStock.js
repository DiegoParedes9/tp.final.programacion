const { productos } = require("./productos");
function bajoStock() {
  console.log("Productos con bajo stock (menos de 10 unidades):");

  let hayBajoStock = false;
  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    if (p.cantidad < 10) {
      console.log("- " + p.nombre + " (" + p.tipo + ") | Marca: " + p.marca + " | Cantidad: " + p.cantidad);
      hayBajoStock = true;
    }
  }

  if (!hayBajoStock) {
    console.log(" No hay productos con bajo stock.");
  }
}

module.exports = { bajoStock };