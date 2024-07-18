import heroes, {owners} from '../data/heroes'

// console.log(heroes);
// console.log(owners);

const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

// console.log(getHeroeById(3));

const getHeroeByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}

// console.log(getHeroeByOwner('DC'));

export {
    getHeroeById,
    getHeroeByOwner
}