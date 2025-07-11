let listaTareas = JSON.parse(localStorage.getItem('listaTareas')) || [];
const inputElement = document.querySelector('.js-cuadro-texto');
const listaTareasUl = document.querySelector('.js-lista-tareas');

mostrarListaTareas();

document.querySelector('.js-btn-agregar').addEventListener('click', () => {
  if (inputElement.value !== '') {
    const tarea = { texto: inputElement.value, completado: false };

    listaTareas.push(tarea);
    guardarLista();
    mostrarListaTareas();
    inputElement.value = '';

  };
});

function mostrarListaTareas() {

  document.querySelector('.js-lista-tareas').innerHTML = '';

  listaTareas.forEach((tarea) => {

    const nuevaTarea = document.createElement('li');
    nuevaTarea.classList.add('js-tarea');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarea.completado;
    checkbox.classList.add('tarea');

    const textoTareaSpan = document.createElement('span');
    textoTareaSpan.textContent = tarea.texto;


    if (tarea.completado) {
      nuevaTarea.classList.add('tarea-completada');
    }

    checkbox.addEventListener('change', () => {
      tarea.completado = !tarea.completado;


      guardarLista();
      mostrarListaTareas();
    });

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('btn', 'js-boton-eliminar');

    botonEliminar.addEventListener('click', () => {

      listaTareas = listaTareas.filter(t => t.texto !== tarea.texto);
      guardarLista();
      mostrarListaTareas();
    });

    listaTareasUl.appendChild(nuevaTarea);

    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(textoTareaSpan);
    nuevaTarea.appendChild(botonEliminar);

  });

}

function guardarLista() {
  localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
}

document.querySelector('.js-btn-limpiar').addEventListener('click', () => {
   listaTareas = listaTareas.filter(t => !t.completado);
   guardarLista();
   mostrarListaTareas();
});