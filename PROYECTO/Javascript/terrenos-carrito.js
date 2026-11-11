function agregarAlCarrito(nombre) {
  let carrito = JSON.parse(
    localStorage.getItem("carritoGommez") || "[]"
  );

  carrito.push({
    nombre: nombre,
    tipo: "Terreno"
  });

  localStorage.setItem(
    "carritoGommez",
    JSON.stringify(carrito)
  );

  actualizarContadorCarrito();

  alert(nombre + " agregado al carrito");
}

function actualizarContadorCarrito() {
  const carrito = JSON.parse(
    localStorage.getItem("carritoGommez") || "[]"
  );

  const contador = document.getElementById("contador-carrito");

  if (contador) {
    contador.textContent = carrito.length;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  actualizarContadorCarrito();
});