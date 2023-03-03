
function fibonacci() {
    var posicao = parseInt(document.getElementById('numero').value);
    var resposta = document.getElementById('resposta');
    var penultimo = 0;
    var ultimo = 1;
    var numero;
   
    if(posicao <= 2) 
     numero = posicao - 1;
    

    else if(posicao == 25) 
      resposta.innerHTML= ' &#128577 Desculpe, este número não pertence a sequência de Fibonacci';
    

    else 
      for(var count=3 ; count<=posicao ; count++){
        numero = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = numero;
      }

      resposta.innerHTML = ("Este número pertence a sequência Fibonacci: " + numero);
}