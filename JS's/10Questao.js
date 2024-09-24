
let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta");


  /*
     @method:salario.
     @return: string,float;
     @args: 
      HorasTrabalhadas: float ,
      SalarioPHora: float,
      const TotalDeHoras: 160,
      Somatorio: float,
     Verifica as horas trabalhadas por um funciorario
     e conferir se passou da hora máxima de um mês 
     se sim, ganha o salario mais 50% 
    
 */

const salario = (HorasTrabalhadas,SalarioPHora) => {
    const TotalDeHoras =  160;
    const Somatorio = SalarioPHora * HorasTrabalhadas;

if(HorasTrabalhadas <= TotalDeHoras){
    resposta.innerHTML = `
    <p>O salário recebido no final do mês foi de:${Somatorio}</p>
    `
}else{
    resposta.innerHTML = `
    <p>O salário recebido no final do mês foi de:${Somatorio*1.5}</p>
    `
    
}
}

botao.onclick = function(){
    const SalarioPHora = Number.parseFloat(document.querySelector("#SalarioPHora").value);
    const HorasTrabalhadas = Number.parseFloat(document.querySelector("#HorasTrabalhadas").value);
  
    salario(HorasTrabalhadas,SalarioPHora)
  
}