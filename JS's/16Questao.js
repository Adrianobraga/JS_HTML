let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta"); 

 /*
     @method: maisvelho.
     @return: string,int;
     @args: Homem1: int ,Homem2: int , Mulher1: int , Mulher2: int;
     Verifica o homem mais velho e a mulher mais nova e soma o inverso também acontece.
    
 */

const maisvelho = (Homem1,Homem2,Mulher1,Mulher2) => {

    if(Homem1 > Homem2 || Mulher1 > Mulher2){
    let SomaHVelho = Homem1 + Mulher2;
    let SomaMVelha = Homem2 + Mulher1;
    
    resposta.innerHTML = `
    <p>A soma do homem mais velho e a mulher mais nova é: ${SomaHVelho}</p>
    <p>A soma do homem mais novo e a mulher mais velha é: ${SomaMVelha}</p>
    ` 
    
    }else{
    let SomaHVelho = Homem2 + Mulher1;
    let SomaMVelha = Homem1 + Mulher2;
    
    resposta.innerHTML = `
    <p>A soma do homem mais velho e a mulher mais nova é: ${SomaHVelho}</p>
    <p>A soma do homem mais novo e a mulher mais velha é: ${SomaMVelha}</p>
    `

}
}
botao.onclick = function () {
    const idade ={ 
     Homem1: Number.parseInt(document.querySelector("#homem1").value),
     Homem2: Number.parseInt(document.querySelector("#homem2").value),
     Mulher1: Number.parseInt(document.querySelector("#mulher1").value),
     Mulher2: Number.parseInt(document.querySelector("#mulher2").value),
    }
    maisvelho(idade.Homem1,idade.Homem2,idade.Mulher1,idade.Mulher2);
}