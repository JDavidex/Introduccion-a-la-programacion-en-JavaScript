function muestraMenu(evento) {
  evento.preventDefault();
  evento.stopPropagation();
  document.querySelector(".menu-nav").classList.toggle("visible");
}

function ocultaMenu(evento) {
  evento.preventDefault();
  document.querySelector(".menu-nav").classList.remove("visible");
}

function clickFueraDeMenu(evento) {
  if (evento.target.closest(".menu-nav")) {
    return;
  }
  document.querySelector(".menu-nav").classList.remove("visible");
}

function teclaEscCierraMenu(evento) {
  if (evento.key === "Escape") {
    document.querySelector(".menu-nav").classList.remove("visible");
  }
}

document.querySelector("#mostrar-menu").addEventListener("click", muestraMenu);
document.querySelector("#cerrar-menu").addEventListener("click", ocultaMenu);
document.addEventListener("click", clickFueraDeMenu);
document.addEventListener("keydown", teclaEscCierraMenu);

// AJUSTES DEL TABLERO Y TARJETAS
document.addEventListener("DOMContentLoaded", function () {
  var opciones = document.querySelectorAll(".menu-nav li:not(#tarjeta)");
  var body = document.body;

  opciones.forEach((elemento) => {
    elemento.addEventListener("click", function () {
      // Cambiar el fondo del cuerpo según la opción elegida
      var cambiarFondo;
      if (this.id === "opcion1") {
        cambiarFondo = "url(images/arenas/Fields_of_Justice_arena.jpg)";
      } else if (this.id === "opcion2") {
        cambiarFondo = "url(images/arenas/Shurima_Arena.jpg)";
      } else if (this.id === "opcion3") {
        cambiarFondo = "url(images/arenas/Void_arena.jpg)";
      }

      body.style.backgroundImage = cambiarFondo;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var opciones = document.querySelectorAll(".menu-nav li:not(#tarjeta)");
  var tarjeta = document.querySelector("#tarjeta img");

  // Guardar la ruta de la imagen original
  var imagenOriginal =
    "images/TFT_SET923_WEB_SetOverview_Header-Background_v001_ASteme.jpg";

  opciones.forEach((elemento) => {
    elemento.addEventListener("click", function () {
      // Cambiar a la imagen original antes de la animación de voltear
      tarjeta.src = imagenOriginal;

      // Aplicar la animación voltear
      tarjeta.classList.add("voltear");

      // Al finalizar la animación, cambiar la imagen por la nueva imagen
      setTimeout(() => {
        let tarjetaImagen;
        if (this.id === "opcion1") {
          tarjetaImagen = "images/arenas/Fields_of_Justice_arena.jpg";
        } else if (this.id === "opcion2") {
          tarjetaImagen = "images/arenas/Shurima_Arena.jpg";
        } else if (this.id === "opcion3") {
          tarjetaImagen = "images/arenas/Void_arena.jpg";
        }

        tarjeta.src = tarjetaImagen;

        // Reinicia la transformación para futuros clics
        tarjeta.classList.remove("voltear");
      }, 1000);
    });
  });
});
