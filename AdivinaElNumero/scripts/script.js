const numeroSecreto = Math.floor(Math.random() * 101);
let numeroUsuario = 0;
let numeroIntentos = 5;

console.log(numeroSecreto);

document.getElementById('btnAdivinar').addEventListener('click', () => {
   numeroUsuario = Number(document.getElementById('numeroUsuario').value);
   console.log(numeroUsuario);

    if(numeroUsuario > 0 && numeroUsuario <= 100 ){
      console.log('juega');

    }else{
      console.log('ingresa un número entre 1 y 100')
    }
});

function adivinarNumero(){

  if(numeroSecreto > numeroUsuario){
    console.log
  }
}

