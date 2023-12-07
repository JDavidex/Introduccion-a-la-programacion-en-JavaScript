function iniciaCronometro() {
  // Obtener la duración según el nivel actual
  var duracionInicial = obtenerDuracionPorNivel(nivelActual);

  var segundos = duracionInicial % 60;
  var minutos = Math.floor(duracionInicial / 60);
  var segundosTexto;
  var minutosTexto;

  function actualizaContador() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      timeOver();
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }
    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }

  cronometro = setInterval(actualizaContador, 1000);
}

function obtenerDuracionPorNivel(nivel) {
  // Mapeo de niveles a duraciones en segundos
  var duraciones = [6, 12, 30, 60, 120];

  // Asegurarse de que el nivel esté dentro de los límites del array
  nivel = Math.max(0, Math.min(nivel, duraciones.length - 1));

  return duraciones[nivel];
}
