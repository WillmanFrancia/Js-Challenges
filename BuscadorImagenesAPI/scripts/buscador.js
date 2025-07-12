const API_KEY = "TU_CLAVE_DE_UNSPLASH_AQUI"; // Reemplaza con tu clave de Unsplash real
const inputBusqueda = document.getElementById("textoBusqueda");
const botonBusqueda = document.getElementById("botonBusqueda");
const galeriaImagenes = document.getElementById("galeriaImagenes");

botonBusqueda.addEventListener("click", () => {
  const terminoBusqueda = inputBusqueda.value;
  console.log("Termino de Búsqueda:", terminoBusqueda);
});
