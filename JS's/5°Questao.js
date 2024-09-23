
let botao = document.querySelector('#botao');
let nota1 = document.querySelector('#resposta');
    
botao.onclick = function(){    
    
    let nota1 = Number.parseInt(document.querySelector('#nota1').value);
    let nota2 = Number.parseInt(document.querySelector('#nota2').value);
/*
     @method:media
     @return: float;
     @args:nota1: int , nota2: int.
     Calculo da media dos alunos.

*/
    const media = (nota1,nota2) => (nota1+nota2)/2;
    
    const MEDIA = media(nota1,nota2);
  
    /*
     @method:situacao
     @return: string;
     @args:MEDIA: float;
     situação do aluno em relação a sua media.

    */
    const situacao = (MEDIA) => {
        if(MEDIA >= 7){
            resposta.innerHTML = `
              <p>APROVADO COM A MEDIA: ${MEDIA}</p>
            `
        }else{
            resposta.innerHTML = `
            <p>REPROVADO COM A MEDIA:${MEDIA}</p>
            `
        }
    }
    console.log(situacao(MEDIA))
}