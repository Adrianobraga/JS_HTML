const valor = document.querySelector('#valor');
const botao = document.querySelector('#Enviar');
let resposta = document.querySelector('#Resposta');
botao.onclick = function(){
    console.log((Number.parseInt(valor.value) > 10)? resposta.value ="É MAIOR QUE 10!": resposta.value = "NÃO É MAIOR QUE 10!");
}