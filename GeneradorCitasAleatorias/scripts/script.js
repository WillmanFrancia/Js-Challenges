const listaCitas = [
  {
    texto: "Pienso, luego existo.",
    autor: "René Descartes",
  },
  {
    texto: "El conocimiento es poder.",
    autor: "Francis Bacon",
  },
  {
    texto: "El único modo de hacer un gran trabajo es amar lo que haces.",
    autor: "Steve Jobs",
  },
  {
    texto: "La medida de lo que somos es lo que hacemos con lo que tenemos.",
    autor: "Vince Lombardi",
  },
];

const textoCita = document.getElementById("textoCita");
const autorCita = document.getElementById("autorCita");
const botonGenerarCita = document.getElementById("botonGenerarCita");

function generarCitaAleatoria() {
  const randomIndex = Math.floor(Math.random() * listaCitas.length);

  textoCita.textContent = `"${listaCitas[randomIndex].texto}"`;

  autorCita.textContent = `- ${listaCitas[randomIndex].autor} -`;
}

botonGenerarCita.addEventListener("click", () => {
  generarCitaAleatoria();
});

generarCitaAleatoria();
