const nome = document.getElementById('nome')
const cognome = document.getElementById('cognome')
const button = document.getElementById('bottom')
const testo = document.getElementById ('smonellita')


function messaggio(){

  
  testo.textContent = `Ciao ${nome.value} ${cognome.value}`
  if (nome.value === 'Cristina'){
    testo.textContent = 'Lei è smoenllerum'
  }
  
}

button.addEventListener('click', ()=>{
  messaggio();
})

const secondButton = document.getElementById('sbottoncino')
const lista = document.getElementById('lista')
const nomi = ['Mario', 'Luca', 'Gianni', 'Beppe', 'Maria']
let listoide = []
function stampafive(){

  
  for (i=0; i<nomi.length;i++){
    console.log(nomi[i])
    listoide.push(nomi[i])
  }
  return listoide;
}

secondButton.addEventListener('click', ()=>{
  stampafive();
  lista.textContent = listoide;
})

const stringaNumeri = document.getElementById('numeri')
const bottonen = document.getElementById ('sbottoncine')
const lis = document.getElementById('list')


bottonen.onclick = function a (){

let newArr = stringaNumeri.value.split(' ');
for (i=0; i<newArr.length;i++){
console.log(newArr[i])
}
console.log(newArr)

}

const numerino = document.getElementById('figuraccia')
const numerone = document.getElementById('numerone')
const diminuire = document.getElementById('diminuisce')
const aggiungere = document.getElementById('aggiungere')
let counterBig = 0
let counterSmall = 0


function counterp (){

  counterBig++;
  counterSmall++;
  return {
    counterBig,
    counterSmall
  };
}

function counterm () {
  counterSmall++;
  counterBig--;

  if (counterBig < 0){
    counterBig = 0
  }

  return {
    counterBig,
    counterSmall
  };
}

diminuire.addEventListener('click', ()=>{
  counterm();
  numerino.innerHTML = counterSmall
  numerone.innerHTML = counterBig
  numerone.style.color = 'red'
})

aggiungere.addEventListener('click', ()=>{
  counterp();
  numerino.innerHTML = counterSmall
  numerone.innerHTML = counterBig
  numerone.style.color = 'green'
})


