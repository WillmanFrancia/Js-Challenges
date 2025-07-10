document.querySelector('.js-btn-agregar').addEventListener('click', () => {

  const inputElement = document.querySelector('.js-cuadro-texto');

  if (inputElement.value != '') {
    document.querySelector('.js-lista-tareas').innerHTML += `<li>${inputElement.value} <button class='btn js-btn-eliminar'>Eliminar</button></li> `;
    inputElement.value = '';
  }

});

