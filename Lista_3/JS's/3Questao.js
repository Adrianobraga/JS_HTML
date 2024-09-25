let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta"); 

    /*
     @method:caso;
     @return: string;
     @args:valor2: float;
      Caso o valor2 for 0 ele ira perguntar novamente   

    */

const caso = (valor2) =>{
    for(let i = 0;i <= 10;i++){
        resposta.innerHTML = "VALOR INVÁLIDO"
    }
}
/*
     @method:divisao;
     @return: float;
     @args:valor1:float ,valor2: float;
     Ira dividir os dois valores
    */

const divisao = (valor1,valor2) =>  resposta.innerHTML =`${valor1/valor2}`;

botao.onclick = function(){
    const valor1 = Number.parseFloat(document.querySelector("#valor1").value);
    const valor2 = Number.parseFloat(document.querySelector("#valor2").value);

    if(valor2 == 0){
    caso(valor2);
    }else{
    divisao(valor1,valor2);
}
}