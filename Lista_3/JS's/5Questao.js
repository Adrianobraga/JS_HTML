let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta"); 

    /*
     @method:caso;
     @return: string;
     @args:valor2: float;
      Caso erre a nota(0 a 10);   

    */

const caso = (valor1,valor2) =>{
while(valor1 <0 || valor1 > 10){
resposta.innerHTML = "Digite outro valor"
valor1 = 1;
}
while(valor2 <0 || valor2 >10){
    resposta.innerHTML = "Digite outro valor"
valor2 = 1;
}
}
/*
     @method:divisao;
     @return: float;
     @args:valor1:float ,valor2: float;
     Média(simples) dos alunos
    */

const media = (valor1,valor2) =>  resposta.innerHTML =`${(valor1+valor2)/2}`;

botao.onclick = function(){
    const valor1 = Number.parseFloat(document.querySelector("#valor1").value);
    const valor2 = Number.parseFloat(document.querySelector("#valor2").value);

    if(valor1 < 0 || valor1 > 10){
        if(valor2 < 0 || valor2 > 10){
            caso(valor1,valor2);
        }else{
            media(valor1,valor2);
        }
    }else{
        media(valor1,valor2);
    }
}
