/*
let nombre = "Santiago";
let edad = 20;
let alumno = true;

console.log(nombre);
console.log(edad);
console.log(alumno);

const CURSO = "Js";    

console.log(CURSO);

let numero1 = Number(prompt("Ingrese un numero para multiplicar"));
let numero2 = Number(prompt("Ingrese el otro numero"));

let resultado = numero1 * numero2;

alert("El resultado de su multiplicación es =" + " " +resultado); 

let pais = prompt("Ingrese de que pais eres ⬇️ ⬇️ ⬇️");
let provincia = prompt("Ingrese de que provincia eres ⬇️ ⬇️ ⬇️");

if (pais != "" && provincia != "") {
    alert("Usted vive en: " + pais + " 😁" + "   En la provincia de: " + provincia + " 😁");
} else {
    alert("Error al ingresar sus datos");
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}


let productos;
let totalPagar= 0
let opcionSillaGamer2;
let opcionSillaErgonomica2;
let opcionSillaOficina2;

let productoSillaCorsair = "Corsair"
let precioSillaCorsair = 80000

let productoSillaRazer = "Razer"
let precioSillaRazer = 100000

let productoSillaTheGameHouse = "The game house"
let precioSillaTheGameHouse = 85000

let productoSillaVonne = "Vonne"
let precioSillaVonne = 45000

let productoSillaDakot = "Dakot"
let precioSillaDakot = 55000

let productoSillaJMI = "JMI"
let precioSillaJMI = 52000



function comprarSillaGamer(){
    opcionSillaGamer2 = parseInt(prompt("ingrese algun modelo 1- Corsair 2- Razer"))

    if(opcionSillaGamer2==1){
        productos = productos + productoSillaCorsair;
        totalPagar = totalPagar + precioSillaCorsair;
        console.log("compro silla gamer corsair")
    }else{
        (opcionSillaGamer2==2); {
            productos = productos + productoSillaRazer;
            totalPagar = totalPagar + precioSillaRazer;
            console.log("compro silla gamer razer")
    }
}
}

function comprarSillaErgonomica(){
    opcionSillaErgonomica2 = parseInt(prompt("ingrese algun modelo 1- The game house 2- Vonne"))

    if(opcionSillaErgonomica2==1){
        productos = productos + productoSillaTheGameHouse;
        totalPagar = totalPagar + precioSillaTheGameHouse;
        console.log("compro silla ergonomica The Game House")
    }else{
        (opcionSillaErgonomica2==2);{
            productos = productos + productoSillaVonne;
            totalPagar = totalPagar + precioSillaVonne;
            console.log("compro silla ergonomica Vonne")
    }
}
}

function comprarSillaOficina(){
    opcionSillaOficina2 = parseInt(prompt("ingrese algun modelo 1- Dakot 2- JMI"))

    if(opcionSillaOficina2==1){
        productos = productos + productoSillaDakot;
        totalPagar = totalPagar + precioSillaDakot;
        console.log("compro silla de oficina Dakot")
    }else{
        (opcionSillaOficina2==2);{
            productos = productos + productoSillaJMI;
            totalPagar = totalPagar + precioSillaJMI;
            console.log("compro silla de oficina JMI")
    }
    }
}

let opcion;

do{
    opcion = parseInt(prompt("Que tipo de Sillas busca? 1- Silla Gamer 2- Silla ergonomica 3- Silla de oficina 4- Salir"))

    switch(opcion){
        case 1:
            console.log("comprar silla gamer")
            comprarSillaGamer();
            break
        case 2:
            console.log("comprar silla ergonomica")
            comprarSillaErgonomica();
            break
        case 3:
            console.log("comprar silla de oficina")
            comprarSillaOficina();
            break
        case 4:
            console.log("salir")
            break
        default:
            console.log("no ha elegido ninguna opcion")
            alert("no ha elegido ninguna opcion")
        break
    }
}while(opcion!=4)

alert("El total a pagar es: $" + totalPagar)

let productos;
let totalPagar= 0

const sillas = [
    {nombre: "Silla Gamer Corsair", precio : 80000 },
    {nombre: "Silla Gamer Razer", precio : 100000 },
    {nombre: "Silla Ergonomica The Game House", precio : 85000 },
    {nombre: "Silla Ergonomica Silla Vonne", precio : 45000 },
    {nombre: "Silla de Oficina Dakot", precio : 55000 },
    {nombre: "Silla de Oficina JMI", precio : 52000 },
]

let carrito = []

let seleccion = prompt("Bienvenidos! Desea comprar alguna Silla?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese Si o No")
    seleccion = prompt("Hola, desea comprar alguna silla?")
}

if(seleccion == "si"){
    alert("A continuacion nuestra lista de Sillas disponibles")
    let sillasDisponibles = sillas.map((silla) => silla.nombre + " " + "$" + silla.precio);
    alert(sillasDisponibles.join(" - "));
    }else if(seleccion == "no"){
        alert("Gracias por su visita, lamentamos no poder ayudarte 😢")
}

while(seleccion != "no"){
    let silla = prompt("Agrega una Silla a tu carrito")
    let precio = 0;

if (silla == "Silla Gamer Corsair" || silla == "Silla Gamer Razer" || silla == "Silla Ergonomica The Game House" || silla == "Silla Ergonomica Silla Vonne" || silla == "Silla de Oficina Dakot" || silla == "Silla de Oficina JMI"){
    switch(silla){
        case "Silla Gamer Corsair":
            precio = 80000
            break;
        case "Silla Gamer Razer":
            precio = 100000
            break;
        case "Silla Ergonomica The Game House":
            precio = 85000 
            break;
        case "Silla Ergonomica Silla Vonne":
            precio = 45000
            break;
        case "Silla de Oficina Dakot":
            precio = 55000
            break; 
        case "Silla de Oficina JMI":
            precio = 52000
            break;
}
let unidades = parseInt(prompt("Cuantas unidades vas a llevar?"))

carrito.push({silla, unidades, precio})
console.log(carrito)
} else {
    alert("No tenemos este producto en stock")
}

seleccion = prompt("Queres seguir comprando?")
while (seleccion === "no") {
    alert("Gracias por la compra")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.silla}, unidades: ${carritoFinal.unidades}, Total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
})
break;
}}

const sillagamer = productos.filter((productos) => productos.nombre.includes ("Silla Gamer")) ;
console.log(sillagamer);

const sillaergonomica = productos.filter((productos) => productos.nombre.includes ("Silla Ergonomica")) ;
console.log(sillaergonomica);

const sillaoficina = productos.filter((productos) => productos.nombre.includes ("Silla de Oficina")) ;
console.log(sillaoficina);

const totalCarrito = sillas.reduce((acumulador,producto) => acumulador + producto.precio, 0)
console.log(totalCarrito);
alert(`El total a pagar es de: ${total}`); */

const tbody = document.querySelector("tbody")

//Carrito con LocalStorage+JSON
const carrito = []
const guardarCarrito = ()=> (carrito.length > 0) && localStorage.setItem("CarritoSillas", JSON.stringify(carrito))
const recuperarCarrito = ()=> JSON.parse(localStorage.getItem("CarritoSillas")) || []
carrito.push(...recuperarCarrito())

//Arma Tabla HTML Dinámica
const armarTablaHTML = (sillas)=> {
    return `<tr>
                <td><h3>${sillas.imagen}</h3></td>
                <td>${sillas.nombre}</td>
                <td>$ ${sillas.precio}</td>
                <td>
                    <button id="${sillas.codigo}" class="button button-outline" title="Agregar al carrito">🛒</button>
                </td>
            </tr>`
}

//Carga productos

const cargarProductos = (array)=> {
    let tablaHTML = ""
        if (array.length > 0) {
            array.forEach((sillas) => tablaHTML += armarTablaHTML(sillas))
        } else {
            tablaHTML = "<h2 class='error-sillas'>Error al cargar productos.</h2>"
        }
        tbody.innerHTML = tablaHTML
}

//Activa CLICK
const activarClickBotonesAdd = ()=> {
    const botonesAdd = document.querySelectorAll("button.button.button-outline")
        botonesAdd.forEach(btn => {
            btn.addEventListener("click", (e)=> {
                let resultado = buscarSilla(e.target.id)
                    carrito.push(resultado)
                    guardarCarrito()
            })
        })
}

cargarProductos(sillas)
activarClickBotonesAdd()

const buscarSilla = (codigo)=> sillas.find(sillas => sillas.codigo === parseInt(codigo))

function comprar() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("Código ingresado erróneo")
            return 
        }
        let sillaElegida = buscarSillagit (codigo)
            carrito.push(sillaElegida)
        let respuesta = confirm("¿Quieres comprar otra silla?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
}

function verCarrito() {
    if (carrito.length > 0) {
        const shopping = new Compra(carrito)
        alert(`El costo total es de $ ${shopping.obtenerSubtotal()}`)
    } else {
        alert("No hay productos en el carrito!")
    }
}

const btnVerCarrito = document.querySelector("button#verCarrito")
btnVerCarrito.addEventListener("click", verCarrito)
