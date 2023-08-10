//Clases
class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Funciones

const generarListaProductos = () => {
  let mensaje = "Productos mágicos disponibles en nuestra tienda: \n";
  let info = productos.map(
    (prod) => `Id: ${prod.id} - Nombre: ${prod.nombre} - Precio: ${prod.precio}`
  );
  mensaje += info.join("\n");
  mensaje +=
    "\nIngrese el Id del producto que desea comprar. De otro modo ingrese 0 para salir o ir al carrito";
  return mensaje;
};

// array de objetos
const productos = [
  new Producto(1, "Varita mágica Harry Potter", 6580),
  new Producto(2, "Varita mágica Hermione", 6350),
  new Producto(3, "Varita mágica Ron", 6350),
  new Producto(4, "Escoba voladora Nimbus 2000", 10200),
  new Producto(5, "Giratiempos-Hermione", 8900),
  new Producto(6, "Set 7 libros Harry Potter", 25000),
  new Producto(7, "Harry Potter y la piedra filosofal: libro1", 6000),
  new Producto(8, "Harry Potter y la camara secreta : libro2", 6000),
  new Producto(9, "Harry Potter y el prisionero de Azkaban : libro3", 6200),
  new Producto(10, "Harry Potter y el Cáliz de fuego : libro4", 7000),
  new Producto(11, "Harry Potter y la Orden dek Fénix : liro5", 7200),
  new Producto(12, "Harry Potter y el misterio del principe : libro6", 6850),
  new Producto(13, "Harry Potter y las reliquias de la muerte : libro7", 7900),
  new Producto(14, "Funko Pop Hermione", 4560),
  new Producto(15, "Funko Pop Harry Potter", 4598),
];

alert("Bienvenido a Harry Potter store");

let usuario = prompt("Ingrese su nombre muggle");

if (usuario == "Agustina" || usuario == "agustina") {
  alert("Binvenida a Hogwarts Agustina!");
}

let precioTotal = 0;

let idProducto = Number(prompt(generarListaProductos()));

while (idProducto !== 0) {
  let productoInfo = productos.find((prod) => prod.id === idProducto);

  if (productoInfo) {
    precioTotal += productoInfo.precio;
    alert(
      `Se agregó el producto mágico ${productoInfo.nombre} 
    Precio: $${productoInfo.precio} ARS`
    );
  } else {
    alert(`Error! el ID es inexistente.Prueba nuevamente`);
  }

  idProducto = Number(prompt(generarListaProductos()));
}

//Final de la compra.
alert(`Finalizaste tu compra!. 
Tu precio total es de: ${precioTotal} ARS
TRAVESURA REALIZADA`);
