// evento de clique no input de aviso
document.querySelector("input#avi").addEventListener("click", function() {
  alert("Aviso: Recomendado repetir até 500 vezes");
})

// adicionar evento de clique no input repetir
document.querySelector('input#tst').addEventListener('click', () => {
  let res = document.getElementById('res');
  let txtnum = document.getElementById('texto');
  let num = document.getElementById('num');
  let ftxtnum = txtnum.value;
  let fnum = Number(num.value);
  let corpo = window.document.body;
  res.innerHTML = '';
  
  // Só vai repetir se os dois inputs tiverem um valor
  if (ftxtnum.length == 0 || num.value.length == 0) {
    alert('Digite algo antes de repetir');
  } else {
    for(let cont = 1; cont <= fnum; cont += 1) {
      res.innerHTML += `${ftxtnum} </br>`;
    }
  }
  
  num.value = '';
  num.focus();
  
  // Colocar um pouco mais de estilo na div res
  res.style.background = 'gray';
  res.style.color = 'blue';
  res.style.borderRadius = '10px';
  res.style.padding = '10px';
  res.style.border = 'solid black 1px';
})

// Colocar o navegador em tela cheia
function telacheia() {
  let elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}