
const botao = document.querySelector("#botao");
const resposta = document.querySelector("#resposta");

botao.onclick = function () {
    const DataAtual = new Date();
    const AnoAtual = DataAtual.getFullYear();
    const AnoNascido = Number.parseInt(document.querySelector("#AnoNascido").value);
    let Calculo = AnoAtual - AnoNascido;
    
    const verificar = (Calculo) => {
     if(Calculo >= 18){
        resposta.innerHTML = `
        <p> Você é obrigado a votar.</p>
        `
    }else{
        resposta.innerHTML = `
        <p> Ainda não pode votar.</p>
        `
    }
}
verificar(Calculo)
}
