const botonDetener = document.getElementById("btn-detener");
const botonReiniciar = document.getElementById("btn-reiniciar");
const botonIniciar = document.getElementById("btn-iniciar");

botonDetener.disabled = true;
botonReiniciar.disabled = true;

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

const textoTiempo = document.getElementById("displayTiempo");

reiniciarCronometro();

botonIniciar.addEventListener("click", () => {
  iniciarCronometro();
});

botonDetener.addEventListener("click", () => {
  detenerCronometro();
  botonReiniciar.disabled = false;
});

botonReiniciar.addEventListener("click", () => {
  reiniciarCronometro();
});

function actualizarCronometro() {
  segundos++;

  if (segundos === 60) {
    minutos += 1;
    segundos = 0;
  }

  if (minutos === 60) {
    horas += 1;
    minutos = 0;
  }

  textoTiempo.textContent = `${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`;
}

function detenerCronometro() {
  clearInterval(intervalo);
  botonIniciar.disabled = false;
  botonDetener.disabled = true;
  botonReiniciar.disabled = false;
}

function reiniciarCronometro() {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  intervalo = null;

  textoTiempo.textContent = `${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`;
  botonIniciar.disabled = false;
  botonDetener.disabled = true;
  botonReiniciar.disabled = true;
}

function iniciarCronometro() {
  if (intervalo !== null) {
  } else {
    intervalo = setInterval(actualizarCronometro, 1000);
    botonIniciar.disabled = true;
    botonDetener.disabled = false;
  }
}

function formatoTiempo(unidad) {
  return unidad < 10 ? "0" + unidad : unidad;
}
