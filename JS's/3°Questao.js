let valor = document.querySelector('#valor');
let resposta = document.querySelector('#resposta');
let botao = document.querySelector('#botao');

botao.onclick = function(){

if(Number.parseInt(valor.value) >= 0 ){
    resposta.value = "É positivo"
}else{
    resposta.value = "É negativo"
}
}