const API_KEY = "API_KEY";
export async function buscarImagenesApi(termino) {

  const URL_API = `https://api.unsplash.com/search/photos?query=${termino}&client_id=${API_KEY}`;

  try {

    const response = await fetch(URL_API);

    if (!response.ok) {
      throw new Error(
        `Error de red o API:${response.status} ${response.statusText}`,
      );
    }

    const datos = await response.json();

    return datos;

  } catch (error) {
    console.error('Hubo un error  al buscar imágenes', error);
    throw error;
  }

}
