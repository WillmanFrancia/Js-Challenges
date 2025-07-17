function colorAleatorio() {
  const lista = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let colorAleatorio = '';

  for (let i = 0; i < 6; i++) {
    const indiceAleatorio = Math.floor(Math.random() * 16);

    colorAleatorio += lista[indiceAleatorio]
  }

  return `#${colorAleatorio}`;
}

document.querySelector('.js-boton-cambiar-color').addEventListener('click', () => {
  const color = colorAleatorio();
  document.body.style.backgroundColor = color;
  document.querySelector('.js-codigo-color').innerHTML = `Color : ${color}`;

});

