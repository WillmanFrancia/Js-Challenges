const valorUsuario = document.getElementById("valorUsuario");
const unidadOrigen = document.getElementById("unidadOrigen");
const unidadDestino = document.getElementById("unidadDestino");
const resultadoTexto = document.getElementById("resultadoTexto");

function realizarConversion() {
  console.log(Number(valorUsuario.value));
  console.log(unidadOrigen.value);
  console.log(unidadDestino.value);
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
