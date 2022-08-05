// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

//Remove last cat from array
function destructivelyRemoveLastCat() {
    return cats.pop();
}

//Remove firts cat from array
function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    const allCats = [...cats];
    allCats.pop();
    return allCats;
}

function removeFirstCat() {
    const allCats = [...cats];
    allCats.shift();
    return allCats;
}