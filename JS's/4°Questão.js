let Quantidade = document.querySelector('#quantidade');
let botao = document.querySelector('#botao');
let resposta = document.querySelector('#resposta')

/*
     @method:Preco
     @return: String;
     @args:Quantidade: int , resposta: string
     Verifica a quantidade de maçãs para colocar um preço

*/

function Preco (Quantidade){
    botao.onclick = function(){
    if(Number.parseInt(Quantidade.value) >= 12){
         resposta.value = "As maçãs custam R$ 1,90" 
    }else{
         resposta.value = "As maçãs custam R$ 2,50" 
    } 
}
}
Preco(Quantidade);