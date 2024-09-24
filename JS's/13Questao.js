let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta"); 

 /*
     @method: verificasaldo.
     @return: string;
     @args:credito: float ,saldo: float , debito: float;
     Verifica se o saldo está positivo ou negativo
    
 */

const verificasaldo = (credito,saldo,debito) => {

let SaldoAtual = saldo - debito + credito;
console.log(SaldoAtual)
if(SaldoAtual > 0){
    resposta.innerHTML = "Saldo Positivo";
}else{
    resposta.innerHTML = "Saldo Negativo";
}
}
botao.onclick = function(){
    const infomacao = {
        numeroDaConta: 91392391,
        cliente: "Adriano",
        saldo: Number.parseFloat(document.querySelector("#saldo").value),
        debito: Number.parseFloat(document.querySelector("#debito").value),
        credito: Number.parseFloat(document.querySelector("#credito").value),
      }
verificasaldo(infomacao.credito,infomacao.saldo,infomacao.debito);
}