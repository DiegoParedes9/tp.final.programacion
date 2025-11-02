
const { productos } = require("./productos");

function verProveedores() {
    console.log("-------------------------------------");
    console.log("LISTA DE PROVEEDORES");
    console.log("-------------------------------------");

  
  const proveedores = [
    { nombre: "Samsung", contacto: "samsung@proveedores.com" },
    { nombre: "Apple", contacto: "apple@proveedores.com" },
    { nombre: "Sony", contacto: "sony@proveedores.com" },
    { nombre: "Microsoft", contacto: "microsoft@proveedores.com" },
    { nombre: "Dell", contacto: "dell@proveedores.com" }
  ]
  
  for (let i = 0; i < proveedores.length; i++) {
    const p = proveedores[i];
    console.log((i + 1) + ". " + p.nombre + " - " + p.contacto);
  }
  console.log("-------------------------------------");
}

module.exports = { verProveedores };
