let conteo = 0;

document.querySelector('.js-boton-incrementar').addEventListener('click', () => {
  conteo++;
  document.querySelector('.js-texto').innerHTML = conteo;
});

document.querySelector('.js-boton-reducir').addEventListener('click', () => {
  if (conteo > 0) {
    conteo--;
    document.querySelector('.js-texto').innerHTML = conteo;

  }
});

document.querySelector('.js-boton-reset').addEventListener('click', () => {
  conteo = 0;
  document.querySelector('.js-texto').innerHTML = conteo;

});