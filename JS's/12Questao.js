let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta"); 


 /*
     @method: verificasalario.
     @return: string,float;
     @args:SalarioFinal: float 
     Verifica quanto um funcionario ira ganhar
    
 */
const verificasalario = (SalarioFinal) =>{
if(SalarioFinal < 1500){
    resposta.innerHTML=`o salário será de ${SalarioFinal}`;
}else{
    resposta.innerHTML=`o salário será de ${SalarioFinal*1.05}`;
}
}
botao.onclick = function(){
    let Salario = Number.parseFloat(document.querySelector("#salario").value);
    let vendas =  Number.parseFloat(document.querySelector("#vendas").value);
    let Calculo = vendas *0.03;
    let SalarioFinal = Salario + Calculo;
    verificasalario(SalarioFinal);
}