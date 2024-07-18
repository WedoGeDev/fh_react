//Desestructuracion
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
}
const persona2 = {
    nombre: 'Steve',
    edad: 45,
    clave: 'Cap',
    rango: 'Capitán',
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const {nombre, edad, clave} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

const {nombre: nombre2} = persona;
console.log(nombre2);

const retornaPersona = ({nombre, edad, rango = 'Soldado'}) => {
    console.log(nombre, edad, rango);
}

retornaPersona(persona);
retornaPersona(persona2);

const retornaAvenger = ({nombre, edad, rango = 'Soldado'})  => {
    return {
        nombreClave: clave,
        edad: edad,
        latlon: {
            lat: 12.100,
            lon: -11.100
        }
    };
}

const avenger = retornaAvenger(persona);

const {nombreClave, edad:edad2, } = avenger;
console.log(nombreClave, edad2);
