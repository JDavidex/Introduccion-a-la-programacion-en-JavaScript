var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  ["ahri.jpg", "akali.jpg"],
  ["corki.jpg", "gnar.jpg"],
  ["jhin.jpg", "jinx.jpg", "kennen.jpg", "lulu.jpg"],
  ["pyke.jpg", "rakan.jpg", "rumble.jpg", "urgot.jpg"],
  ["veigar.jpg", "xayah.jpg", "yuumi.jpg", "zoe.jpg"],
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 4,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 15,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 30,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 50,
  },
];
