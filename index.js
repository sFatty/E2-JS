const pizzas = [
    {
        id: 1,
        nombre: "Muzzarella",
        ingredientes: ["Salsa de tomate", "Queso Muzzarella", "Aceitunas"],
        precio: 1200,
    },
    {
        id: 2,
        nombre: "Hawaiana",
        ingredientes: ["Salsa de tomate", "Queso Muzzarella", "Anana", "Jamon"],
        precio: 1500,
    },
    {
        id: 3,
        nombre: "Especial",
        ingredientes: ["Salsa de tomate", "Queso Muzzarella", "Jamon", "Morron", "Aceitunas"],
        precio: 1300,
    },
    {
        id: 4,
        nombre: "Cuatro quesos",
        ingredientes: ["Queso Muzzarella", "Queso Parmesano", "Queso Roquefort", "Queso Fontina"],
        precio: 700,
    },
    {
        id: 5,
        nombre: "Napolitana",
        ingredientes: ["Salsa de tomate", "Queso Muzzarella", "Aceituna", "Rodajas De Tomate"],
        precio: 1000,
    },
    {
        id: 6,
        nombre: "Pepperoni",
        ingredientes: ["Salsa de tomate", "Queso Muzzarella", "Pepperoni"],
        precio: 1100,
    }
]

let nombre = document.querySelector('h2');
let precio = document.querySelector('h3');
let ingre = document.querySelector('h4');
let errorR = document.querySelector('h5');
let input = document.querySelector("input[type='number']")
let button = document.querySelector('button')

function add(e) {
    e.preventDefault()
    const valorInput = input.value.trim();
    if (pizzas.some(item => item.id == valorInput)) {
        nombre.innerText = `Pizza de "${pizzas.find(item => item.id == valorInput).nombre}" tiene un precio de:`;
        precio.innerText = `$${pizzas.find(item => item.id == valorInput).precio} (${pizzas.find(item => item.id == valorInput).precio} pesos)`;
        ingre.innerText = `Sus ingredientes son: ${pizzas.find(item => item.id == valorInput).ingredientes}`
    } else {
        alert("No existe ninguna pizza con ese número")
    }
}
button.addEventListener("click", add);