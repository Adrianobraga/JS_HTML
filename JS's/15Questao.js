let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta"); 

const valores = (x,y)  => {

let z = (x*y)+5
if (z <= 0){
let resultado = "A";
resposta.innerHTML ="A";
}
else if( z <= 100){
resultado = "B"
resposta.innerHTML ="B";
}
else{
resultado = "C"
resposta.innerHTML = `Resultado final: , ${z} , Resposta:  , ${resultado} `
}
}
botao.onclick = function (){
let x = Number.parseInt(document.querySelector("#x").value);
let y = Number.parseInt(document.querySelector("#y").value);
valores(x,y);
}