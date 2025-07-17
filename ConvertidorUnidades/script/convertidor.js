const valorUsuario = document.getElementById("valorUsuario");
const unidadOrigen = document.getElementById("unidadOrigen");
const unidadDestino = document.getElementById("unidadDestino");
const resultadoTexto = document.getElementById("resultadoTexto");

function realizarConversion() {
  let valorEntrada = Number(valorUsuario.value);
  let valorEnMetros;
  let resultadoFinal;

  if (isNaN(valorEntrada) || valorEntrada === 0) {
    resultadoTexto.textContent = "Ingrese un valor válido";
    return;
  }

  switch (unidadOrigen.value) {
    case "metros":
      valorEnMetros = valorEntrada;
      break;
    case "kilometros":
      valorEnMetros = valorEntrada * 1000;
      break;
    case "millas":
      valorEnMetros = valorEntrada * 1609.34;
      break;
    case "centimetros":
      valorEnMetros = valorEntrada / 100;
      break;
    default:
      break;
  }

  switch (unidadDestino.value) {
    case "metros":
      resultadoFinal = valorEnMetros;
      break;
    case "kilometros":
      resultadoFinal = valorEnMetros / 1000;
      break;
    case "millas":
      resultadoFinal = valorEnMetros / 1609.34;
      break;
    case "centimetros":
      resultadoFinal = valorEnMetros * 100;
      break;
    default:
      break;
  }

  resultadoTexto.textContent = `${resultadoFinal.toFixed(2)} ${unidadDestino.value}`;
}

valorUsuario.addEventListener("input", () => {
  realizarConversion();
});

unidadDestino.addEventListener("change", () => {
  realizarConversion();
});

unidadOrigen.addEventListener("change", () => {
  realizarConversion();
});
