let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let numeroUsuario = 0;
let numeroIntentos = 5;

console.log(numeroSecreto);
const mensajeJuego = document.getElementById('mensajeJuego');
const textoNumeroIntentos = document.getElementById('intentosRestantes')
const inputNumeroUsuario = document.getElementById('numeroUsuario');

textoNumeroIntentos.textContent = `Intentos restantes: ${numeroIntentos}`;

const botonReiniciar = document.createElement('button');
botonReiniciar.textContent = 'Reiniciar';
botonReiniciar.classList.add('btn');
botonReiniciar.style.display = 'none';
document.getElementById('contenedor').appendChild(botonReiniciar);

botonReiniciar.addEventListener('click', () => {
  resetearJuego();

});
resetearJuego();
document.getElementById('btnAdivinar').addEventListener('click', () => {

  numeroUsuario = Number(inputNumeroUsuario.value);
  if (numeroUsuario > 0 && numeroUsuario <= 100) {
    adivinarNumero();
    inputNumeroUsuario.value = '';
  } else {
    mensajeJuego.textContent = 'Debes ingresar un ńumero entre 1 y 100';
  }

});

function adivinarNumero() {


  if (numeroSecreto === numeroUsuario) {
    textoNumeroIntentos.textContent = `¡Felicidades! ¡Adivinaste el número secreto que era ${numeroSecreto}!`;

    inputNumeroUsuario.disabled = true;
    document.getElementById('btnAdivinar').disabled = true;


    botonReiniciar.style.display = 'block';


  } else {
    numeroIntentos--;
    textoNumeroIntentos.textContent = `Intentos restantes: ${numeroIntentos}`;

    if (numeroIntentos > 0) {
      if (numeroSecreto > numeroUsuario) {
        mensajeJuego.textContent = "El número secreto es MAYOR.";
      } else {
        mensajeJuego.textContent = "El número secreto es MENOR.";
      }
    } else {
      mensajeJuego.textContent = `¡Perdiste! El número secreto era ${numeroSecreto}.`;

      botonReiniciar.style.display = 'block';

    }

  }

}

function resetearJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  numeroIntentos = 5;
  inputNumeroUsuario.disabled = false;
  document.getElementById('btnAdivinar').disabled = false;
  mensajeJuego.textContent = 'Ingresa un número y haz click en el botón adivinar';
  textoNumeroIntentos.textContent = `Intentos restantes: ${numeroIntentos}`;
  botonReiniciar.style.display = 'none';
}