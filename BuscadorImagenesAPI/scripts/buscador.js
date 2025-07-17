import { buscarImagenesApi } from "./modules/api.js";

buscarImagenesApi()
const inputBusqueda = document.getElementById("textoBusqueda");
const botonBusqueda = document.getElementById("botonBusqueda");
const galeriaImagenes = document.getElementById("galeriaImagenes");

botonBusqueda.addEventListener("click", async () => {
  const terminoBusqueda = inputBusqueda.value;

  if (!terminoBusqueda) {
    galeriaImagenes.innerHTML = "<p>Por favor, ingrese un termino de búsqueda.</p>";
    return;
  }
  galeriaImagenes.innerHTML = '<p>Cargando imágenes...</p>';

  try {
    const datos = await buscarImagenesApi(terminoBusqueda);

    if (datos.results.lenght === 0) {
      galeriaImagenes.innerHTML =
        "<p>No se encontraron resultados para su búsqueda. Intente con otro término</p>";
      return;
    }

    galeriaImagenes.innerHTML = "";

    datos.results.forEach((imagen) => {
      const elementoImagen = document.createElement("img");
      elementoImagen.src = imagen.urls.small;
      elementoImagen.alt =
        imagen.alt_description || imagen.description || "Imágen de Unsplash";
      elementoImagen.classList.add("webImagen");
      galeriaImagenes.appendChild(elementoImagen);
    });
  } catch (error) {
    galeriaImagenes.innerHTML =
      "<p>No se pudieron cargar las imágenes. Inténtalo de nuevo.</p>";
  }
});



