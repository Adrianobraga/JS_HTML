let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta"); 

 /*
     @method: vefificacao.
     @return: string;
     @args: QuantidadeAtual: int ,QuantidadeMinima: int , QuantidadeMaxima: int;
     Verifica se pode fazer a compra de acordo com o estoque
    
 */

const vefificacao = (QuantidadeAtual,QuantidadeMinima,QuantidadeMaxima) => {
let QuantidadeMedia = (QuantidadeMaxima + QuantidadeMinima)/2;
if(QuantidadeAtual >= QuantidadeMedia){
    resposta.innerHTML ="Não efetuar compra";
}else{
    resposta.innerHTML = "Efetuar compra";
}
}
botao.onclick = function() {
    const estoque = { 
    QuantidadeAtual: Number.parseInt(document.querySelector("#QuantidadeAtual").value),
     QuantidadeMinima:Number.parseInt(document.querySelector("#QuantidadeMinima").value),
     QuantidadeMaxima:Number.parseInt(document.querySelector("#QuantidadeMaxima").value),
    }
    vefificacao(estoque.QuantidadeAtual ,estoque.QuantidadeMinima, estoque.QuantidadeMaxima)
}