/*
Quando clicar na seta para avançar temos que esconder todas as imagens e mostras a proxima imagem
    a imagem atual começa em 0 por que e´a primeira imagem,assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a proxima imagem

        -esconder todas as imagens
            pegar todas a s imagens usando DOM e remover a classe mostrar
            
        -mostrar a proxima imagem
            pegar todas as imagens, descobrir qual é a proxima, e colocar a classe mostrar

        -mostrar a proxima imagem
            pegar todas as imagens, descobrir qual é a proxima, e colocar a classe mostrar nela

*/

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {

    const totalDeImagens = imagensPainel.length -1;

    if(imagemAtual === totalDeImagens){
        return;
    }

    imagemAtual++;

    esconder();
    mostrar();
})
setaVoltar.addEventListener("click", function () {
    if(imagemAtual === 0){
        return;
    }
    imagemAtual--;
    imagensPainel.forEach(imagem => {
    imagem.classList.remove("mostrar")
})
imagensPainel[ imagemAtual].classList.add("mostrar");
 esconder();

 mostrar();
})



function esconder (){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove("mostrar")
    })
}
function mostrar (){
    imagensPainel[ imagemAtual].classList.add("mostrar");
}