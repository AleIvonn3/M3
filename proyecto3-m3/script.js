let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico" },
    { nombre: "Manzana", tipo: "Pomácea" },
    { nombre: "Plátano", tipo: "Tropical" },
    { nombre: "Uva", tipo: "Baya" },
    { nombre: "Fresa", tipo: "Baya" },
    { nombre: "Piña", tipo: "Tropical" },
    { nombre: "Mango", tipo: "Tropical" },
    { nombre: "Cereza", tipo: "Drupa" },
    { nombre: "Pera", tipo: "Pomácea" },
    { nombre: "Sandía", tipo: "Cucurbitácea" },
    { nombre: "Melón", tipo: "Cucurbitácea" },
    { nombre: "Durazno", tipo: "Drupa" },
    { nombre: "Coco", tipo: "Drupa" },
    { nombre: "Kiwi", tipo: "Baya" },
    { nombre: "Limón", tipo: "Cítrico" }
];

/*let citricos;
let pomaceas;
let tropicales;
let drupas;
let cucurbitaceas;*/

let conteoFrutas = {};

// Recorrer el arreglo y contar las frutas por tipo
for (let fruta of frutasConTipo) {
    if (conteoFrutas[fruta.tipo]) {
        conteoFrutas[fruta.tipo]++;
    } else {
        conteoFrutas[fruta.tipo] = 1;
    }
}

console.log(conteoFrutas);