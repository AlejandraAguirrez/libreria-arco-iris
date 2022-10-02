const productos= []
const carrito = []

class Juegos{
    constructor(id, nombre, precio, img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
    desplegarJuegos(){
        const containerCard = `
        <div class="containerCard">
            <img src=${this.img} alt="">
            <h4>${this.nombre}</h4>
            <p>$${this.precio}</p>
            <button id=${this.id} class="btnAgregar">Agregar</button>
            </div>
            `
            const container = document.getElementById('container')
            container.innerHTML += containerCard
    }
    agregarCarrito(){
        const agregar = document.getElementById(this.id)
        const juegoElegido = productos.find(product => product.id == this.id)
        agregar.addEventListener('click', () =>agregarAlCarrito(juegoElegido))
    }
}

let juegosdeMesa = new Juegos( '0','Juego de Mesa', 3700, './imagenes/juegos.jpg')
let plazaBlanda = new Juegos( '1', 'Plaza Blanda', 18500, './imagenes/peloterito-y-auto.jpg')
let castillo = new Juegos( '2','Castillo', 8000, './imagenes/castillos.jpg')
let tobogan = new Juegos( '3','Tobogan', 23500, './imagenes/tobogan.jpg')

productos.push(juegosdeMesa, plazaBlanda, castillo, tobogan)

console.log(productos)

productos.forEach(e => {
    e.desplegarJuegos()
})
productos.forEach(e => {
    e.agregarCarrito()
})

function agregarAlCarrito(producto) {
    const enCarrito = carrito.find(prod => prod.id == producto.id)
    if (!enCarrito) {
        carrito.push({...producto, cantidad: 1})
} else {
    const carritoFiltrado = carrito.filter(prod => prod.id != producto.id)
    carrito = [
        ...carritoFiltrado,
        { ...enCarrito, cantidad: enCarrito.cantidad + 1}
    ]
}
console.log(carrito)
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad,0)
}

const contador = document.getElementById('contador')
const alquilar = document.getElementById('alquilar')

alquilar.onclick = () => {
    let totalAlquiler = 0
    carrito.forEach ((prod)=>{
        totalAlquiler = totalAlquiler + prod.precio
    })
    swal.fire({
        title: 'El total del alquiler es de',
        text:`${'$'+totalAlquiler}`,
        timer:5000,
})
}

