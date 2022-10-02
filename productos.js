//PAGINA PRODUCTOS CARD: VARIEDAD DE JUEGOS

let variedadJuegos = []
const juegosCard= document.getElementById('variedadJuegos')

class juegosVariedad{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio    
        this.id = id
}
}

let metegol = new juegosVariedad('metegol', 3700, 1)
let sapo = new juegosVariedad('sapo', 4500, 2)
let arcade = new juegosVariedad('arcade', 8500, 3)

variedadJuegos.push(metegol, sapo, arcade)

variedadJuegos.forEach(juegosVariedad=>{
    const option = document.createElement('option')
    const {nombre, precio} = juegosVariedad  //DESTRUCTURACION
    option.innerText = `${nombre}: $${precio}`
    juegosCard.append(option)
})

//PAGINA PRODUCTOS CARD: PLAZA BLANDA

let plazaBlanda = []
const plazaCard= document.getElementById('plazaBlanda')

class plaza{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
} 
}

let tobogan = new plaza('tobogan', 3500, 4)
let saltarin = new plaza('saltarin', 2600, 5)
let circuito = new plaza('circuito', 7500, 6)

plazaBlanda.push(tobogan, saltarin, circuito)

plazaBlanda.forEach(plaza=>{
    const option = document.createElement('option')
    const {nombre, precio} = plaza   //DESTRUCTURACION
    option.innerText = `${nombre}: $${precio}`
    plazaCard.append(option)
})

//PAGINA PRODUCTOS CARD: INFLABLES

let inflables = []
const inflablesCard= document.getElementById('inflables')

class inflable{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
} 
}

let castillo = new inflable('castillo', 9000, 7)
let ring = new inflable('ring',12000, 8)
let barco = new inflable('barco', 13500, 9)

inflables.push(castillo, ring, barco)


inflables.forEach(inflable=>{
    const option = document.createElement('option')
    const {nombre, precio} = inflable  //DESTRUCTURACION 
    option.innerText = `${nombre}: $${precio}`
    inflablesCard.append(option)
})

function agregarEvento(){
    const comprar = document.getElementById(this.id)
    console.log(this.id)
    const productoElegido = productos.find(product => product.id === this.id)
    comprar.addEventListener('click', () =>agregarCarrito(productoElegido))
}





