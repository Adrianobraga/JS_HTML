let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta");


botao.onclick = function(){
    let Valor1 = Number.parseInt(document.querySelector("#valor1").value);
    let Valor2 = Number.parseInt(document.querySelector("#valor2").value);
    console.log(Valor1)
    
    /*
     @method:sequencia.
     @return: int;
     @args:valor1: int , valor2: int.
     Verifica qual número vem primeiro e coloca eles em sequência decrescente.

*/
    const sequencia = (Valor1,Valor2) => {
if (Valor1 > Valor2){
    resposta.innerHTML = `
    <p> a sequência é ${Valor1},${Valor2} </p>
    `
}else{
    resposta.innerHTML = `
    <p> a sequência é ${Valor2},${Valor1} </p>
    `
}
}
sequencia(Valor1,Valor2)
}