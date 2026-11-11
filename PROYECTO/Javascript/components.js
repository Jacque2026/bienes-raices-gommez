fetch("header.html")
    .then(respuesta => respuesta.text())
    .then(datos => {
document.getElementById("header").innerHTML = datos;
        activarVentanaNosotros();
        activarVentanaServicios();
        activarVentanaContacto();
        activarVentanaBuscado();
    });

fetch("footer.html")
    .then(respuesta => respuesta.text())
    .then(datos => {
document.getElementById("footer").innerHTML = datos;
    });
    function activarVentanaNosotros() {
    const boton = document.getElementById("abrir-nosotros");
    const ventana = document.getElementById("ventana-nosotros");
    const cerrar = document.getElementById("cerrar-nosotros");

    if (!boton || !ventana || !cerrar) return;

    if (boton.dataset.modalActivo === "true") return;
    boton.dataset.modalActivo = "true";

    boton.addEventListener("click", function(e) {
        e.preventDefault();
        ventana.hidden = false;
        cerrar.focus();
    });

    cerrar.addEventListener("click", function() {
        ventana.hidden = true;
        boton.focus();
    });

    ventana.addEventListener("click", function(e) {
        if (e.target === ventana) {
            ventana.hidden = true;
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && !ventana.hidden) {
            ventana.hidden = true;
            boton.focus();
        }
    });
}
function activarVentanaServicios() {
    const boton = document.getElementById("abrir-servicios");
    const ventana = document.getElementById("ventana-servicios");
    const cerrar = document.getElementById("cerrar-servicios");

    if (!boton || !ventana || !cerrar) return;

    boton.addEventListener("click", function(e) {
        e.preventDefault();
        ventana.hidden = false;
        cerrar.focus();
    });

    cerrar.addEventListener("click", function() {
        ventana.hidden = true;
        boton.focus();
    });

    ventana.addEventListener("click", function(e) {
        if (e.target === ventana) {
            ventana.hidden = true;
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && !ventana.hidden) {
            ventana.hidden = true;
            boton.focus();
        }
    });
}
function activarVentanaContacto() {
    const boton = document.getElementById("abrir-contacto");
    const ventana = document.getElementById("ventana-contacto");
    const cerrar = document.getElementById("cerrar-contacto");

    if (!boton || !ventana || !cerrar) return;

    boton.addEventListener("click", function(e) {
        e.preventDefault();
        ventana.hidden = false;
        cerrar.focus();
    });

    cerrar.addEventListener("click", function() {
        ventana.hidden = true;
        boton.focus();
    });

    ventana.addEventListener("click", function(e) {
        if (e.target === ventana) {
            ventana.hidden = true;
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && !ventana.hidden) {
            ventana.hidden = true;
            boton.focus();
        }
    });
}
function activarVentanaBuscado() {
  const boton = document.getElementById("abrir-buscado");
  const ventana = document.getElementById("ventana-buscado");
  const cerrar = document.getElementById("cerrar-buscado");

  if (!boton || !ventana || !cerrar) return;

  boton.addEventListener("click", function(e) {
    e.preventDefault();
    ventana.hidden = false;
    cerrar.focus();
  });

  cerrar.addEventListener("click", function() {
    ventana.hidden = true;
    boton.focus();
  });

  ventana.addEventListener("click", function(e) {
    if (e.target === ventana) {
      ventana.hidden = true;
      boton.focus();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && !ventana.hidden) {
      ventana.hidden = true;
      boton.focus();
    }
  });
}