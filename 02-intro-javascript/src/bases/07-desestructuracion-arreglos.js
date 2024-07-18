const personajes = ["personaje1", "personaje2", "personaje3"];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [p1, p2, p3] = personajes;
console.log(p1, p2, p3);

const [, per2, per3] = personajes;
console.log(per2, per3);

const retornaArreglo = () => {
    return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const miFunc = (valor) => {
    return [
        valor,
        () => {
            console.log("Hola mundo");
        },
    ];
};

const arr = miFunc('Omar');
console.log(arr);

const [nombre, funcion] = miFunc('Omar');
funcion();
