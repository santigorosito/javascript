const productos = [
  {
      id: "sillag-01",
      titulo: "Silla Gamer Corsair",
      imagen: "./imagenes/SillaGamer/01.jpg",
      categoria: {
          nombre: "Sillas Gamers",
          id: "sillas gamers"
      },
      precio: 19000
  },
  {
      id: "sillag-02",
      titulo: "Silla Gamer Razer",
      imagen: "./imagenes/SillaGamer/02.jpg",
      categoria: {
          nombre: "Sillas Gamers",
          id: "sillas gamers"
      },
      precio: 150000
  },
  {
      id: "sillag-03",
      titulo: "Silla Gamer Xtrike Rgb Led",
      imagen: "./imagenes/SillaGamer/03.jpg",
      categoria: {
          nombre: "Sillas Gamers",
          id: "sillas gamers"
      },
      precio: 110000
  },
  {
      id: "sillag-04",
      titulo: "Silla Gamer Good Gamer",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_858597-MLA45295107919_032021-O.webp",
      categoria: {
          nombre: "Sillas Gamers",
          id: "sillas gamers"
      },
      precio: 90000
  },
  {
      id: "sillao-01",
      titulo: "Silla de Oficina Dakot",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_891268-MLA53146129322_012023-O.webp",
      categoria: {
          nombre: "Sillas de oficina",
          id: "sillas de oficina"
      },
      precio: 60000
  },
  {
      id: "sillao-02",
      titulo: "Silla de Oficina JMI",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_681749-MLA48859817431_012022-O.webp",
      categoria: {
          nombre: "Sillas de oficina",
          id: "sillas de oficina"
      },
      precio: 50000
  },
  {
      id: "sillao-03",
      titulo: "Sillon Ejecutivo de Oficina",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_712341-MLA51839759378_102022-O.webp",
      categoria: {
          nombre: "Sillas de oficina",
          id: "sillas de oficina"
      },
      precio: 43000
  },
  {
      id: "sillao-04",
      titulo: "Silla de Oficina Baires4",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_687166-MLA41440286386_042020-O.webp",
      categoria: {
          nombre: "Sillas de oficina",
          id: "sillas de oficina"
      },
      precio: 42000
  },
  {
      id: "sillase-01",
      titulo: "Silla Ergonomica The Game House",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_787625-MLA50740513898_072022-O.webp",
      categoria: {
          nombre: "Sillas ergonomicas",
          id: "sillas ergonomicas"
      },
      precio: 160000
  },
  {
      id: "sillase-02",
      titulo: "Silla Ergonomica Silla Vonne",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_720323-MLA51592442084_092022-O.webp",
      categoria: {
          nombre: "Sillas ergonomicas",
          id: "sillas ergonomicas"
      },
      precio: 80000
  },
  {
      id: "sillase-03",
      titulo: "Silla Ergonomica Tokio",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_963439-MLA52498863135_112022-O.webp",
      categoria: {
          nombre: "Sillas ergonomicas",
          id: "sillas ergonomicas"
      },
      precio: 50000
  },
  {
      id: "sillase-04",
      titulo: "Silla Oficina Escritorio Ergonomica Giratoria",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_742700-MLA52642138271_112022-O.webp",
      categoria: {
          nombre: "Sillas ergonomicas",
          id: "sillas ergonomicas"
      },
      precio: 20000
  }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";
  productosElegidos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">Agregar</button>
          </div>
      `;
      contenedorProductos.append(div);
  })
  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
      botonesCategorias.forEach(boton => boton.classList.remove("active"));
      e.currentTarget.classList.add("active");
      if (e.currentTarget.id != "todos") {
          const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
          tituloPrincipal.innerText = productoCategoria.categoria.nombre;
          const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
          cargarProductos(productosBoton);
      } else {
          tituloPrincipal.innerText = "Todos los productos";
          cargarProductos(productos);
      }
  })
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");
  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);
  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
  } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}