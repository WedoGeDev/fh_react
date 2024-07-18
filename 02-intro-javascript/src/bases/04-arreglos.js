const arreglo = new Array();

console.log(arreglo);

const arreglo2 = new Array(100);

console.log(arreglo2);

arreglo2.push(1);
console.log(arreglo2);

const arreglo3 = [];
arreglo3.push(1);
arreglo3.push(2);
arreglo3.push(3);
arreglo3.push(4);
console.log(arreglo3);

const arreglo4 = [1,2,3,4];
console.log(arreglo4);

const arreglo5 = [...arreglo4, 5]
console.log(arreglo5);

const arreglo6 = arreglo5.map(function(numero) {
    return numero * 2;
});
console.log(arreglo6);


