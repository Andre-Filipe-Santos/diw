// 1 PASSA POR AQUI!

const text_hover = document.querySelector("#ponto_1");

function muda_texto() {
  if (text_hover.textContent === "1. Passa por aqui!") {
    text_hover.textContent = "1. Obrigado por passares!";
  } else {
    text_hover.textContent = "1. Passa por aqui!";
  }
}
//se passar lá com rato chama as funcoes
text_hover.addEventListener("mouseover", muda_texto);
text_hover.addEventListener("mouseout", muda_texto);

// 2 PINTA-ME

const text_click = document.querySelector("#texto_para_pintar");
const butao_que_pinta = document.querySelectorAll(".text_color");

butao_que_pinta.forEach(function (butao) {
  butao.addEventListener("click", () => {
    text_click.style.color = butao.dataset.color;
  });
});

// 3 EXPERIMENTA ESCREVER

const caixa_1 = document.querySelector("#caixa1");

let cores = 0;

function experimenta_escrever() {
  if (cores === 0) {
    caixa_1.style.backgroundColor = "yellow";
    cores++;
  } else if (cores === 1) {
    caixa_1.style.backgroundColor = "green";
    cores++;
  } else if (cores === 2) {
    caixa_1.style.backgroundColor = "lightBlue";
    cores = 0;
  }
}

caixa_1.addEventListener("keydown", experimenta_escrever);

// 4 ESCOLHE UMA COR COM DROP DOWN MENU

const fundo = document.querySelector("body");
const selected_color = document.querySelectorAll(".butoes_cores");

selected_color.forEach(function (butao) {
  butao.addEventListener("change", () => {
    //está aqui a arrow function
    fundo.style.backgroundColor = butao.value;
  });
});

// 5 CONTADOR COM LOCAL STORAGE

const butao_contador = document.querySelector("#contador");
const result = document.querySelector("#resultado");

if (!localStorage.getItem("contador")) {
  localStorage.setItem("contador", 0);
}

let count = localStorage.getItem("contador");
result.textContent = count;

butao_contador.addEventListener("click", function contar() {
  count++;
  localStorage.setItem("contador", count);
  result.textContent = count;
});

// CONTAINER DE BOLAS

const organizer = document.querySelectorAll("#organize_bolas");
const container_bolas = document.querySelector("#container_bolas");

organizer.forEach(function (elemento) {
  elemento.addEventListener("change", function () {
    container_bolas.style.flexDirection = elemento.value;
  });
});

//ONSUBMIT

const dados_form = document.querySelector("#formulario");
const result_form = document.querySelector("#resultado_form");

dados_form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que a página recarregue automaticamente

  const nome = dados_form.querySelector("#nome").value; //sem value fica só o ponteiro para ...
  const idade = dados_form.querySelector("#idade").value;

  if (nome !== "" && idade !== "") {
    result_form.textContent = `Olá, o ${nome} tem ${idade}!`;
  } else {
    result_form.textContent = "Por acaso não tens nome??? 🤔🤔";
  }
});

//AUTOMATIC COUNTER

let contador_automatico = 0;

let result_automatico = document.querySelector("#automatic_counter");

const result_jogo = document.querySelector("#jogo");

setInterval(function () {
  contador_automatico++;
  result_automatico.textContent = contador_automatico;

  if (contador_automatico == count) {
    result_jogo.textContent = "GANDA MÁQUINA";
  } else {
    result_jogo.textContent = "Tenta apanhar-me com o contador!";
  }
}, 1000);

//JOGO
