let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta"); 

 /*
     @method:IMC.
     @return: string,float;
     @args: 
      sexo: string,
      altura: float,
      pesoIdealMasculino: float ,
      pesoIdealFeminino: float,
     calcula o peso ideal masculino ou feminino 
    
 */
const IMC = (sexo,altura) => {

    let pesoIdealMasculino = (72.7 * altura) - 58;
    let pesoIdealFeminino = (62.1 * altura) - 44.7; 
    if(sexo == "m"){
        resposta.innerHTML = `O peso ideal seria: ${pesoIdealMasculino}` ;
    }else{
        resposta.innerHTML = `O peso ideal seria: ${pesoIdealFeminino}` ;
    }
    
}
botao.onclick = function(){
    let sexo = document.querySelector("#sexo").value;
    let altura = document.querySelector("#altura").value;
    IMC(sexo,altura)
}