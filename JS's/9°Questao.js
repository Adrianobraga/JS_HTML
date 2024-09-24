let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta");

botao.onclick = function(){
let TempoMaximo = 24;
let InicioDePartida = Number.parseInt(document.querySelector("#iniciodapartida").value);
let FinalDaPartida = Number.parseInt(document.querySelector("#finaldapartida").value);
let Calculo = FinalDaPartida - InicioDePartida; 

  /*
     @method:tempodepartida.
     @return: string;
     @args:Calculo: int , TempoMaximo: int.
     Confere quanto tempo durou a partida ou se atingiu o limite.
    
 */

const tempodepartida = (Calculo,TempoMaximo) => {

if(Calculo <= TempoMaximo){
    resposta.innerHTML = `
    A partida durou ${Calculo}h
    `
}else{
    resposta.innerHTML = `
    Atingiu o tempo máximo
    `

}

}
tempodepartida(Calculo,TempoMaximo)

}