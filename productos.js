const { celulares } = require("./celulares");
const { televisores } = require("./televisores");
const { consolas } = require("./consolas");
const { auriculares } = require("./auriculares");

let productos = [];


function agregar(origen) {
  
  if (!origen) return;
  let i = 0;
  while (i < origen.length) {
    productos.push(origen[i]);
    i = i + 1;
  }
}

agregar(celulares);
agregar(televisores);
agregar(consolas);
agregar(auriculares);

module.exports = { productos };