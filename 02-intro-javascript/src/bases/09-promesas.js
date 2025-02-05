import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         // resolve(heroe);
//         reject("no se pudo encontrar el heroe");
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log("Heroe", heroe);
// })
// .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            }
            reject('No se encontró el héroe');
        }, 2000);
    });
}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);