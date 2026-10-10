// 1 PASSA POR AQUI!

const text_hover = document.querySelector("#ponto_1");

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


// 2 PINTA-ME

const text_click = document.querySelector("section:nth-of-type(2)");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

function colorir_red(){
    text_click.style.color = "red";
}
function colorir_green(){
    text_click.style.color = "green";
}
function colorir_blue(){
    text_click.style.color = "blue";
}
red.addEventListener("click", colorir_red);
green.addEventListener("click", colorir_green);
blue.addEventListener("click", colorir_blue);


// 3 EXPERIMENTA ESCREVER

const caixa_1 = document.querySelector("#caixa1");

let cores = 0;

function experimenta_escrever(){

    if(cores === 0){
        caixa_1.style.backgroundColor = "yellow";
        cores++;
    }else if(cores === 1){
        caixa_1.style.backgroundColor = "green";
        cores++;
    }else if (cores === 2){
        caixa_1.style.backgroundColor = "lightBlue";
        cores = 0;
    }
}

caixa_1.addEventListener("keydown",experimenta_escrever);

// 4 ESCOLHA UMA COR EM INGLES

const background_color = document.querySelector("body")
const ponto_4 = document.querySelector("#ponto_4");

const form_cor = document.querySelector("form");

function colorir_fundo(event){

    //impede a pagina de fazer refresh
    event.preventDefault();

    background_color.style.backgroundColor = ponto_4.value;

}

form_cor.addEventListener("submit", colorir_fundo);

// 5 CONTADOR

let count = 0;

const butao_contador = document.querySelector("#contador")
const result = document.querySelector("#resultado");
result.textContent = count;

function contar(){
    count++;
    result.textContent = count;
}

butao_contador.addEventListener("click", contar);


