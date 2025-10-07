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

// Lista de productos
let productos = [
    { nombre: "PlayStation 5", tipo: "consola", precio: 600, stock: 5 },
    { nombre: "Xbox Series X", tipo: "consola", precio: 550, stock: 4 },
    { nombre: "iPhone 15", tipo: "celular", precio: 900, stock: 3 },
    { nombre: "Samsung Galaxy S24", tipo: "celular", precio: 850, stock: 6 },
    { nombre: "LG 55-inch 4K TV", tipo: "televisor", precio: 700, stock: 2 },
    { nombre: "Sony Bravia 65-inch", tipo: "televisor", precio: 1200, stock: 1 },
    { nombre: "Sony WH-1000XM5", tipo: "auriculares", precio: 350, stock: 8 },
    { nombre: "JBL Live 660NC", tipo: "auriculares", precio: 150, stock: 7 }
];

console.log("Lista de productos:", productos);

export function buscarProductoPorTipo(tipo) {
    return productos.filter(p => p.tipo === tipo);
}
