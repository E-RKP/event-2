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