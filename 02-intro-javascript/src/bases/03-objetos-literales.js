const persona = {
    nombre: "Omar",
    apellido: "Garcia",
    edad: 37,
    direccion: {
        ciudad: "Zapopan",
        zipCode: "45236",
        calle: "De la Esperanza",
    },
};

console.log(persona);
console.log({ persona });
console.table(persona);

const persona2 = persona;

persona2.nombre = "Oscar";
console.table(persona);

//operador spread, copia todos los valores / propiedades de un objeto en otro
const persona3 = { ...persona };
persona3.nombre = 'Tony';

console.table(persona);
console.table(persona3);
