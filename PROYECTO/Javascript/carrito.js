function obtenerCarrito() {
    return JSON.parse(
        localStorage.getItem("carritoGommez") || "[]"
    );
}

function actualizarContador() {
    const contador = document.getElementById("contador-carrito");

    if (contador) {
        contador.textContent = obtenerCarrito().length;
    }
}

function actualizarBotones() {
    const carrito = obtenerCarrito();

    document.querySelectorAll(".btn-carrito").forEach(boton => {
        const existe = carrito.some(
            casa => casa.id === boton.dataset.id
        );

        boton.disabled = existe;
        boton.textContent = existe
            ? "✓ Agregado al carrito"
            : "🛒 Agregar al carrito";
    });
}

document.addEventListener("click", function(evento) {
    const boton = evento.target.closest(".btn-carrito");

    if (!boton) return;

    const carrito = obtenerCarrito();

    if (!carrito.some(casa => casa.id === boton.dataset.id)) {
        carrito.push({
            id: boton.dataset.id,
            nombre: boton.dataset.nombre,
            imagen: boton.dataset.imagen
        });

        localStorage.setItem(
            "carritoGommez",
            JSON.stringify(carrito)
        );

        alert("¡Propiedad agregada al carrito!");
    }

    actualizarContador();
    actualizarBotones();
});

document.addEventListener("DOMContentLoaded", function() {
    actualizarBotones();
    actualizarContador();

    // Esperar a que components.js cargue el header
    const intervalo = setInterval(() => {
        if (document.getElementById("contador-carrito")) {
            actualizarContador();
            clearInterval(intervalo);
        }
    }, 200);

    setTimeout(() => clearInterval(intervalo), 5000);
});
  
/* MOSTRAR PROPIEDADES EN EL CARRITO */

function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");

    if (!lista) return;

    const carrito = obtenerCarrito();

    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.textContent = "Tu carrito está vacío.";
        return;
    }

    carrito.forEach(casa => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "propiedad-carrito";
const imagen = document.createElement("img");

imagen.src = casa.imagen || "";
imagen.alt = casa.nombre;
imagen.className = "imagen-carrito";

if (casa.imagen) {
    tarjeta.appendChild(imagen);
}
        const nombre = document.createElement("h3");
        nombre.textContent = casa.nombre;

        const boton = document.createElement("button");
        boton.textContent = "Eliminar del carrito";

        boton.addEventListener("click", () => {
            eliminarCasa(casa.id);
        });

        tarjeta.append(nombre, boton);
        lista.appendChild(tarjeta);
    });
}

/* ELIMINAR UNA CASA */

function eliminarCasa(id) {
    const carrito = obtenerCarrito().filter(
        casa => casa.id !== id
    );

    localStorage.setItem(
        "carritoGommez",
        JSON.stringify(carrito)
    );

    actualizarContador();
    actualizarBotones();
    mostrarCarrito();
}

/* CARGAR EL CARRITO */

document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
});
/* VACIAR TODO EL CARRITO */

document.addEventListener("DOMContentLoaded", () => {

    const botonVaciar = document.getElementById(
        "vaciar-carrito"
    );

    if (botonVaciar) {
        botonVaciar.addEventListener("click", () => {

            localStorage.removeItem("carritoGommez");

            actualizarContador();
            actualizarBotones();
            mostrarCarrito();

            alert("El carrito se ha vaciado");
        });
    }
});
/* SOLICITAR INFORMACIÓN POR WHATSAPP */

document.addEventListener("DOMContentLoaded", function () {

  const botonWhatsApp =
    document.getElementById("solicitar-whatsapp");

  if (!botonWhatsApp) return;

  botonWhatsApp.addEventListener("click", function () {

    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
      alert("Primero selecciona una propiedad.");
      return;
    }

    let mensaje =
      "Hola, estoy interesado en estas propiedades de GOMMEZ:\n\n";

    carrito.forEach((propiedad, indice) => {
      mensaje += `${indice + 1}. ${propiedad.nombre}\n`;
    });

    mensaje +=
      "\nMe gustaría recibir más información. Gracias.";

    const telefono = "529512219472";

    const enlace =
      `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, "_blank", "noopener,noreferrer");

  });

});