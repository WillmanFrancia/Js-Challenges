const API_KEY = "API_KEY";
const inputBusqueda = document.getElementById("textoBusqueda");
const botonBusqueda = document.getElementById("botonBusqueda");
const galeriaImagenes = document.getElementById("galeriaImagenes");

botonBusqueda.addEventListener("click", () => {
  const terminoBusqueda = inputBusqueda.value;

  if (terminoBusqueda) {
    buscarImagenes(terminoBusqueda);
  } else {
    galeriaImagenes.textContent = "Por favor, ingrese un termino de búsqueda.";
  }
});

async function buscarImagenes(termino) {
  const URL_API = `https://api.unsplash.com/search/photos?query=${termino}&client_id=${API_KEY}`;

  try {
    galeriaImagenes.innerHTML = "<p>Cargando imágenes...</p>";

    const response = await fetch(URL_API);

    if (!response.ok) {
      throw new Error(
        `Error de red o API:${response.status} ${response.statusText}`,
      );
    }

    galeriaImagenes.innerHTML = "";

    const datos = await response.json();

    if (datos.results.lenght === 0) {
      galeriaImagenes.innerHTML =
        "<p>No se encontraron resultados para su búsqueda. Intente con otro término</p>";
      return;
    }

    datos.results.forEach((imagen) => {
      const elementoImagen = document.createElement("img");
      elementoImagen.src = imagen.urls.small;
      elementoImagen.alt =
        imagen.alt_description || imagen.description || "Imágen de Unsplash";
      elementoImagen.classList.add("webImagen");
      galeriaImagenes.appendChild(elementoImagen);
    });
    console.log(datos);
  } catch (error) {
    galeriaImagenes.innerHTML =
      "<p>No se pudieron cargar las imágenes. Inténtalo de nuevo.</p>";
  }
}
