// declaracao de variaveis

const nodeInputNumero = document.querySelector(
  " #colecao ~ section input[type = 'number'] ",
);
const nodeInputSubmit = document.querySelector(
  " #colecao ~ section input[type='submit'] ",
);

const nodeUlColecao = document.querySelector(" #colecao ul ");
const nodeUlColecaoRepetidos = document.querySelector(" #repetidos ul ");

//LOCAL STORAGE
let colecao = JSON.parse(localStorage.getItem("colecao") || "[]");
let repetidos = JSON.parse(localStorage.getItem("repetidos") || "[]");

const contadorCromos = document.querySelector("#colecao span");
const contadorCromosRepetidos = document.querySelector("#repetidos span");

//Renderização inicial no DOM com os dados lidos do localStorage
atualizaLista(colecao, nodeUlColecao);
atualizaLista(repetidos, nodeUlColecaoRepetidos);

// B. event handlers

function guardaCarta(e) {
  e.preventDefault(); // para nao fazer refresh quando se faz submit
  const valorSubmetido = nodeInputNumero.value;

  //limpar o campo de dados
  nodeInputNumero.value = "";

  if (!colecao.includes(valorSubmetido)) {
    //se o valor nao existir no arrayCromos

    colecao.push(valorSubmetido); //adiciona

    colecao.sort(function (a, b) {
      //ordena
      return a - b;
    });

    atualizaLista(colecao, nodeUlColecao); //insere no html na lista <ul> o <li> com o valor submetido
  } else {
    repetidos.push(valorSubmetido);

    repetidos.sort(function (a, b) {
      return a - b;
    });

    atualizaLista(repetidos, nodeUlColecaoRepetidos);
  }
}

function atualizaLista(arrayCromos, lista_Ul) {
  lista_Ul.innerHTML = "";

  if (lista_Ul === nodeUlColecaoRepetidos) {
    arrayCromos.forEach((cromo, index) => {
      const nodeLi = document.createElement("li");

      nodeLi.innerHTML = `${cromo} <button>Eliminar</button>`;

      lista_Ul.append(nodeLi);

      nodeLi.querySelector("button").addEventListener("click", function () {
        apagarCromo(index);
      });
    });

    contadorCromosRepetidos.textContent = repetidos.length;
    localStorage.setItem("repetidos", JSON.stringify(repetidos));
  } else {
    arrayCromos.forEach((cromo) => {
      const nodeLi = document.createElement("li");

      nodeLi.textContent = cromo;

      lista_Ul.append(nodeLi);
    });

    contadorCromos.textContent = colecao.length; // manda num elementos do arrayCromos para o contador
    localStorage.setItem("colecao", JSON.stringify(colecao));
  }
}

function apagarCromo(index) {
  repetidos.splice(index, 1);
  atualizaLista(repetidos, nodeUlColecaoRepetidos);
}

// C. event listeners

const form = document.querySelector("form");

// isto nao é ideal, se quiser executar mais que uma função nao funciona,
//  o .onsubmit mais recente faz override ao anterior
//mas foi o que o prof pediu no lab6
form.onsubmit = guardaCarta;

//dentro desta ul vai buscar os butoes
const listaButoes = nodeUlColecaoRepetidos.querySelectorAll("button");
