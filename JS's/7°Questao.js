let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta");

botao.onclick = function (){
let Valor1 = document.querySelector("#valor1").value;
let Valor2 = document.querySelector("#valor2").value;

/*
     @method:prioridade.
     @return: int;
     @args:valor1: int , valor2: int.
     Verifica qual número vem primeiro.

*/

const prioridade = (Valor1,Valor2) => {
if(Valor1 > Valor2){
    resposta.innerHTML = `
    <p>O ${Valor1} é maior! </p>
    `
}else{
    resposta.innerHTML = `
    <p>O ${Valor2} é maior! </p>
    `
    
}
}
prioridade(Valor1,Valor2);
}