function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar("Omar"));
console.log(saludar);
saludar = 30;
console.log(saludar);

const saludar2 = function (nombre) {
    return `Hola ${nombre}`;
};
console.log(saludar2("Omar"));
console.log(saludar2);
// saludar2 = 30;
console.log(saludar2);

const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar3("Omar"));
console.log(saludar3);
// saludar3 = 30;
console.log(saludar3);

const getUser = () => ({
    uuid: "ABC123",
    username: "OmarGarcia",
})

console.log(getUser());

const obtenerUsuarioActivo = (nombre) => ({
    uuid: 'DEF456',
    username: nombre
})

console.log(obtenerUsuarioActivo('Omar'));