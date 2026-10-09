// PASSA POR AQUI!

const text_hover = document.querySelector("section:nth-of-type(1)");

function muda_texto(){

    if(text_hover.textContent === "1. Passa por aqui!"){
        text_hover.textContent = "1. Obrigado por passares!";
    }else{
        text_hover.textContent = "1. Passa por aqui!";
    }
}
//se passar lá com rato chama as funcoes
text_hover.addEventListener("mouseover",muda_texto);
text_hover.addEventListener("mouseout",muda_texto);

//PINTA-ME

const text_click = document.querySelector("section:nth-of-type(2)");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

function colorir_texto(){


}


