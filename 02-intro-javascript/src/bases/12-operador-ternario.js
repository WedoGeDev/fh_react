const activo = true;
const mensaje = activo ? "Activo" : "inactivo";
console.log(mensaje);

const mensaje2 = !activo ? "Activo" : null;
console.log(mensaje2);

const mensaje3 = !activo &&  "Activo";
console.log(mensaje3); 