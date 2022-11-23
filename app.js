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
*/

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