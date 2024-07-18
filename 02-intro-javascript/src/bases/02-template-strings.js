const nombre = 'Omar';
const apellido = 'Garcia';

const nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

const nombreCompletoTemplateString = `${nombre} ${apellido}`;
console.log(nombreCompletoTemplateString);

const saltoLinea = `${nombre} 
${apellido}
${1 + 1}`;

console.log(saltoLinea);

function GetSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${GetSaludo('Omar')}`);
