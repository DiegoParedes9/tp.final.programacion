import fs from 'fs'
const rutaDatos = "./productos.json";

export function cargarDatos() {
    const datos = JSON.parse(fs.readFileSync(rutaDatos, "utf-8"));
    return datos;
}

export function guardarDatos(datos) {
    const texto = JSON.stringify(datos, null, 2);
    fs.writeFileSync(rutaDatos, texto, "utf-8");
}