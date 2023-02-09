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
alert(`El total a pagar es de: ${total}`); 

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
btnVerCarrito.addEventListener("click", verCarrito)*/

function saludar() {
    console.log("Hola bienvenido a Goro Gamer!");
}
saludar();

let nombre = prompt("Ingrese su nombre");

console.log("El usuario a ingresado: " + nombre);

alert("Hola !" + " " + nombre + " aca podras comprar lo mejor para tu comodidad");

class Articulo {
constructor(codigo, descripcion, precio, imagen) {
this.codigo = Number(codigo);
this.descripcion = descripcion;
this.precio = Number(precio);
this.imagen = imagen;
}
}
const articulo1 = new Articulo(1, "Silla Gamer Corsair", 19000, "https://http2.mlstatic.com/D_NQ_NP_623397-MLA49108788172_022022-O.webp");
const articulo2 = new Articulo(2, "Silla Gamer Razer", 150000, "https://http2.mlstatic.com/D_NQ_NP_695441-MLA51617049234_092022-O.webp");
const articulo3 = new Articulo(3, "Silla Gamer Xtrike Rgb Led", 110000, "https://http2.mlstatic.com/D_NQ_NP_766668-MLA52252820593_112022-O.webp");
const articulo4 = new Articulo(4, "Silla Gamer Good Game", 90000, "https://http2.mlstatic.com/D_NQ_NP_858597-MLA45295107919_032021-O.webp");
const articulo5 = new Articulo(5, "Silla de Oficina Dakot", 60000, "https://http2.mlstatic.com/D_NQ_NP_891268-MLA53146129322_012023-O.webp");
const articulo6 = new Articulo(6, "Silla de Oficina JMI", 50000, "https://http2.mlstatic.com/D_NQ_NP_681749-MLA48859817431_012022-O.webp");
const articulo7 = new Articulo(7, "Sillon Ejecutivo de Oficina", 43000, "https://http2.mlstatic.com/D_NQ_NP_712341-MLA51839759378_102022-O.webp");
const articulo8 = new Articulo(8, "Silla de Oficina Baires4", 42000, "https://http2.mlstatic.com/D_NQ_NP_687166-MLA41440286386_042020-O.webp");
const articulo9 = new Articulo(9, "Silla Ergonomica The Game House", 160000, "https://http2.mlstatic.com/D_NQ_NP_787625-MLA50740513898_072022-O.webp");
const articulo10 = new Articulo(10, "Silla Ergonomica Silla Vonne", 80000, "https://http2.mlstatic.com/D_NQ_NP_720323-MLA51592442084_092022-O.webp");
const articulo11 = new Articulo(11, "Silla Ergonomica Tokio", 50000, "https://http2.mlstatic.com/D_NQ_NP_963439-MLA52498863135_112022-O.webp");
const articulo12 = new Articulo(12, "Silla Oficina Escritorio Ergonomica Giratoria", 20000, "https://http2.mlstatic.com/D_NQ_NP_742700-MLA52642138271_112022-O.webp");


const articulos1 = [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9, articulo10, articulo11, articulo12];

const solicitarArticulos = () => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(articulos1);
    }, 1000);
});
};

let articulos = []

solicitarArticulos()
.then((res) => {
    articulos = res;
    mostrarCatalogo(articulos);
});

function mostrarCatalogo(articulos) {
articulos.forEach((art) => {
    let agrupador = document.getElementById("catalogo");
    let agrupador1 = document.createElement("div");
    agrupador1.innerHTML = `
    <div class="card mt-3 mb-3" style="width: 18rem;">
    <img src="${art.imagen}" class="imgen">
                <div class="card-body text-dark bg-secondary bg-opacity-25 wid">                    
                    <p class="card-title text-center fs-5 fw-bold">${art.descripcion}</p>                      
                    <p class="card-text">$${art.precio}</p>
                    <div class="botonesDisplay">
                        <button class="btn btn-primary" onclick="Sacar(${art.codigo})">-</button>
                        <br>
                        <div id="${art.codigo}">                      
                            <input class="display" type="text" min="0" placeholder="0" name="cantidad" disabled></input>
                        </div>
                        <br>                      
                        <button class="btn btn-primary" onclick="Agregar(${art.codigo})">+</button>
                    </div>
                    <br>
                    <a href="#finalPagina"><button class="btn btn-primary" onclick="visualizarCarrito(${art.codigo})">Agregar Carrito</button></a>                        
                    </div>
                </div>
            `;
    agrupador.append(agrupador1);
  });
}


setTimeout(() => {
  const numeros = [2399, 2206, 1198, 1992, 2039, 2130, 2813, 2843];
  let contador = -1;
  setInterval(() => {
    if (contador < 8) {
      contador++;
    } else {
      contador = -1;
    }
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ccaefc98fbmsha73882bc11b185cp103be5jsne0776200c6ca",
        "X-RapidAPI-Host": "quotes-villa.p.rapidapi.com",
      },
    };

    fetch("https://quotes-villa.p.rapidapi.com/quotes/art", options)
      .then((response) => response.json())
    let contenedorAgregar = document.getElementById("fetch");
  }, 10000);
}, 1000);


let subtotal = 0;
function subTotal(precio, cant) {
  subtotal = 0;
  subtotal = precio * cant;
}


let total = 0;
function totalCarrito() {
  verCarrito.innerHTML = ``;
  total = 0;
  if (comprados.length !== 0) {
    agregarArticulos();
    let silla2 = document.getElementById("totalCarro");
    silla2.innerHTML = `<h2>Total:  $ ${total}</h2>`;
    let silla3 = document.getElementById("confirmarCompra");
    silla3.innerHTML = `<button class="btn btn-primary" onclick="confirmarCarrito()">Confirmar Carro</button>`;
  } else {
    let silla1 = document.getElementById("verCarrito");
    silla1.innerHTML = ``;
    verCarrito.innerHTML = ``;
    let silla2 = document.getElementById("totalCarro");
    silla2.innerHTML = ``;
  }
}

let tituloCarro = 0;
function tablaCarro() {
  verCarrito.innerHTML = ``;
  if (tituloCarro === 0 && comprados.length > 0) {
    let silla1 = document.getElementById("tituloCarrito");
    let contenedor1 = document.createElement("div");
    contenedor1.innerHTML = `<h2 class="tituloCarro">Carrito de Compras.</h2>
<table class="table" border="1" cellpading="0" cellspacing="0">
                <tr>
                    <th>COD.</th>
                    <th>DESCRIP.</th>
                    <th>CANT.</th>
                    <th>PRECIO</th>
                    <th>SUBT.</th>
                    <th></th>
                </tr>                                                   datosCliente
            </table>`;
            silla1.append(contenedor1);
    let datos = document.getElementById("datosCliente");
    datos.innerHTML = `
        <label for="nombre">Nombre y Apellido:*</label>        
        <input class="input" type="text" placeholder="Nombre y Apellido" name="nombre" id="nombre" required>
        <label for="nombre">Dirección:*</label>        
        <input class="input" type="text" placeholder="Dirección" name="direccion" id="direccion" required>
        <label for="nombre">Telefono de Contacto:*</label>        
        <input class="input" type="number" placeholder="Telefono de Contacto" name="nombre" id="telefono" required>                        
        `;
    totalCarrito();
    tituloCarro = 1;
  } else if (comprados.length > 0) {
    verCarrito.innerHTML = ``;
    totalCarrito();
  } else {
    let silla1 = document.getElementById("tituloCarrito");
    silla1.innerHTML = ``;
    verCarrito.innerHTML = ``;
    let silla3 = document.getElementById("confirmarCompra");
    silla3.innerHTML = ``;
    let datos = document.getElementById("datosCliente");
    datos.innerHTML = ``;
    agregarArticulos();
  }
}

let iconoEliminar = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>`;

let posicionRaqueta = 0;
function agregarArticulos() {
  posicionRaqueta = 0;
  localStorage.clear();
  const guardarLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };
  for (const articulo of comprados) {
    total = total + articulo.precio * articulo.cantidad;
    let silla0 = document.getElementById("verCarrito");
    let contenedorAgregar = document.createElement("div");
    contenedorAgregar.innerHTML = `
    <table class="table1" border="1" cellpading="20" cellspacing="0">                       
                    <tr>
                        <td>${articulo.codigo}</td>                            
                        <td>${articulo.descripcion}</td>
                        <td>${articulo.cantidad}</td>
                        <td> $ ${articulo.precio}</td>
                        <td> $ ${articulo.subtotal}</td>
                        <td><span onclick="eliminar(${posicionRaqueta})">${iconoEliminar}</span></td>                            
                    </tr>                            
                </table>      
                `;
                silla0.append(contenedorAgregar);
    posicionRaqueta = posicionRaqueta + 1;
    guardarLocalStorage("productosComprados", JSON.stringify(comprados));
  }
}

let porEliminar;
function eliminar(posicion) {
  porEliminar = comprados[posicion];
  Toastify({
    text:
      "Se elimino del carrito " +
      porEliminar.cantidad +
      " " +
      porEliminar.descripcion,
    duration: 3000,
    gravity: "top",
    position: "right",
  }).showToast();
  comprados.splice(posicion, 1);
  totalCarrito();
  tablaCarro();
  comprados.length > 0 ? (tituloCarro = 1) : (tituloCarro = 0);
  estadoDatos.innerHTML = ``;
}

let nombreCliente = "";
let direccion = "";
let telefono = "";
function tomarDatos() {
  let nombreC = document.getElementById("nombre");
  nombreC.addEventListener("input", () => {
    nombreCliente = nombreC.value;
  });
  let dire = document.getElementById("direccion");
  dire.addEventListener("input", () => {
    direccion = dire.value;
  });
  let telef = document.getElementById("telefono");
  telef.addEventListener("input", () => {
    telefono = telef.value;
  });
}

let estadoDatos = document.getElementById("estadoDatos");
function confirmarCarrito() {
  if (nombreCliente === "") {
    estadoDatos.innerHTML = `Introduzca su nombre por favor.`;
  } else if (direccion === "") {
    estadoDatos.innerHTML = `Introduzca su direccion por favor.`;
  } else if (telefono === "") {
    estadoDatos.innerHTML = `Introduzca su telefono por favor.`;
  } else {
    comprados.length = 0;
    localStorage.clear();
    let silla0 = document.getElementById("verCarrito");
    silla0.innerHTML = ``;
    let silla1 = document.getElementById("tituloCarrito");
    silla1.innerHTML = ``;
    let silla2 = document.getElementById("totalCarro");
    silla2.innerHTML = ``;
    let datos = document.getElementById("datosCliente");
    datos.innerHTML = ``;
    estadoDatos.innerHTML = ``;
    tituloCarro = 0;
    telefono = "";
    let silla3 = document.getElementById("confirmarCompra");
    silla3.innerHTML = ``;
    confirmarEnvio();
  }
}

function confirmarEnvio() {
  Swal.fire({
    title: `${nombreCliente}`,
    text: `Tu pedido ingreso correctamente. Te lo enviaremos a la brevedad a ${direccion}.`,
    width: 800,
    icon: "success",
    confirmButtonText: "Aceptar",
  });
}

function articuloCargando(cantidad, descripcion) {
  Toastify({
    text: "Se agrego al carrito " + cantidad + " " + descripcion,
    duration: 3000,
    gravity: "top",
    position: "right",
  }).showToast();
}

class Comprado {
  constructor(codigo, descripcion, precio, cantidad, subtotal) {
    this.codigo = Number(codigo);
    this.descripcion = descripcion;
    this.precio = Number(precio);
    this.cantidad = Number(cantidad);
    this.subtotal = Number(subtotal);
  }
}


let comprados = [];

function compra(codigo, descripcion, precio, cantidad, subtotal) {
  const comprado = new Comprado(
    codigo,
    descripcion,
    precio,
    cantidad,
    subtotal
  );
  comprados.push(comprado);
}

class Comprado1 {
  constructor(obj) {
    this.codigo = parseFloat(obj.codigo);
    this.descripcion = obj.descripcion;
    this.precio = parseFloat(obj.precio);
    this.cantidad = parseFloat(obj.cantidad);
    this.subtotal = parseFloat(obj.subtotal);
  }
}

let renovar = 0;
function renovarCarrito() {
  localStorage.length === 0 &&
    (verCarrito.innerHTML = `<p class="ver">El carrito está vacío!</p>`);
  if (renovar === 0) {
    guardados = JSON.parse(localStorage.getItem("productosComprados"));
    if (localStorage.length > 0) {
      for (const objeto of guardados) {
        comprados.push(new Comprado1(objeto));
      }
    }
    tablaCarro();
    renovar = 1;
  }
}

class Puesta {
  constructor(codigo, cantidad) {
    this.codigo = Number(codigo);
    this.cantidad = Number(cantidad);
  }
}

let cantidadPuesta = []

function previa(codigo, cantidad) {
  const previo = new Puesta(codigo, cantidad);
  cantidadPuesta.push(previo);
}

let cantidad = 0;
let stringId;
let producto2;
let preArticulo;
function Agregar(numArt) {
  producto2 = cantidadPuesta.some((previo) => previo.codigo === numArt);
  if (producto2 === false) {
    cantidad = 0;
    cantidad++;
    previa(numArt, cantidad);    
  } else {
    preArticulo = cantidadPuesta.find((el) => el.codigo === numArt);
    preArticulo.cantidad = preArticulo.cantidad + 1;    
  }
  preArticulo = cantidadPuesta.find((el) => el.codigo === numArt);
  stringId = numArt.toString();
  let contenedor2 = document.getElementById(stringId);
  contenedor2.innerHTML = `<input class="display" type="text" min="1" placeholder="${preArticulo.cantidad}" name="cantidad" disabled>`;
}

function Sacar(numArt) {
  producto2 = cantidadPuesta.some((previo) => previo.codigo === numArt);
  preArticulo = cantidadPuesta.find((el) => el.codigo === numArt);
  if (producto2 === true && preArticulo.cantidad > 0) {
    preArticulo = cantidadPuesta.find((el) => el.codigo === numArt);
    preArticulo.cantidad = preArticulo.cantidad - 1;    
    preArticulo = cantidadPuesta.find((el) => el.codigo === numArt);
    stringId = numArt.toString();
    let contenedor2 = document.getElementById(stringId);
    contenedor2.innerHTML = `<input class="display" type="text" min="1" placeholder="${preArticulo.cantidad}" name="cantidad" disabled>`;
  }
}

function visualizarCarrito(numArt) {
  renovarCarrito();
  preArticulo = cantidadPuesta.find((el) => el.codigo === numArt);
  artSeleccionado = articulos.find((el) => el.codigo === numArt);
  producto2 = cantidadPuesta.some((previo) => previo.codigo === numArt);
  if (producto2 === true && preArticulo.cantidad > 0) {
    subTotal(artSeleccionado.precio, preArticulo.cantidad);
    articuloCargando(preArticulo.cantidad, artSeleccionado.descripcion);
    let existe = comprados.some((comprado) => comprado.codigo === numArt);
    if (existe === false) {
      compra(
        artSeleccionado.codigo,
        artSeleccionado.descripcion,
        artSeleccionado.precio,
        preArticulo.cantidad,
        subtotal
      );
      let poner = document.getElementById("ponerCantidad");
      poner.innerHTML = `<p> </p>`;
      tablaCarro();
      tomarDatos();
    } else {
      artBuscado = comprados.find((el) => el.codigo === numArt);
      artBuscado.cantidad = artBuscado.cantidad + preArticulo.cantidad;
      artBuscado.subtotal = artBuscado.subtotal + subtotal;
      verCarrito.innerHTML = ``;
      totalCarrito();
    }
  } else {
    let poner = document.getElementById("ponerCantidad");
    poner.innerHTML = `<p>Por Favor colocar cantidad!!!</p>`;
  }
  subtotal = 0;
}