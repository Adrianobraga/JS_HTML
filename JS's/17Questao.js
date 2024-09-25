let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta"); 


 /*
     @method: cadastro.
     @return: string,int;
     @args: CodigoDoUsuario: int ,SenhaDoUsuario: int , CodigoArmazenado: int , SenhaArmazenada: int;
     Valida o cadastro de um usuário;
    
 */

const cadastro = (CodigoDoUsuario,SenhaDoUsuario,CodigoArmazenado,SenhaArmazenada) =>{
if(CodigoDoUsuario == CodigoArmazenado){
 if(SenhaDoUsuario == SenhaArmazenada){
   resposta.innerHTML = `
   <p>acesso permitido</p>
   ` 
 }else{
   resposta.innerHTML = `
   <p>senha incorreta</p>
   ` 
 }   

}else{
   resposta.innerHTML = `
   <p>Usuário inválido!</p>
   `
}
}
botao.onclick = function(){
   const informacao ={
    CodigoDoUsuario: Number.parseInt(document.querySelector("#usuario").value),
    SenhaDoUsuario: Number.parseInt(document.querySelector("#senha").value),
    CodigoArmazenado: 1234,
    SenhaArmazenada: 9999,
   }
   cadastro(informacao.CodigoDoUsuario,informacao.SenhaDoUsuario,informacao.CodigoArmazenado,informacao.SenhaArmazenada)
}