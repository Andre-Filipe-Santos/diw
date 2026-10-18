// declaracao de variaveis

const nodeInputNumero = document.querySelector(
  " #colecao ~ section input[type = 'number'] ",
);
const nodeInputSubmit = document.querySelector(
  " #colecao ~ section input[type='submit'] ",
);
const nodeUlColecao = document.querySelector(" #colecao ul ");
const nodeUlColecaoRepetidos = document.querySelector(" #repetidos ul ");

const colecao = [];
const repetidos = [];

const contadorCromos = document.querySelector("#colecao span");
const contadorCromosRepetidos = document.querySelector("#repetidos span");

// B. event handlers
function guardaCarta(e) {
  e.preventDefault(); // para nao fazer refresh quando se faz submit
  const valorSubmetido = nodeInputNumero.value;

  //limpar o campo de dados
  nodeInputNumero.value = "";

  if (!colecao.includes(valorSubmetido)) {
    //se o valor nao existir no array

    colecao.push(valorSubmetido); //adiciona

    colecao.sort(function (a, b) {
      //ordena
      return a - b;
    });

    atualizaLista(colecao, nodeUlColecao); //insere no html na lista <ul> o <li> com o valor submetido

    contadorCromos.textContent = colecao.length; // manda num elementos do array para o contador
  } else {
    repetidos.push(valorSubmetido);

    repetidos.sort(function (a, b) {
      return a - b;
    });

    atualizaLista(repetidos, nodeUlColecaoRepetidos);

    contadorCromosRepetidos.textContent = repetidos.length;
  }
}

function atualizaLista(array, lista_Ul) {
  lista_Ul.innerHTML = "";


  if (lista_Ul === nodeUlColecaoRepetidos) {

    array.forEach((array_element) => {

      const nodeLi = document.createElement("li");

      nodeLi.innerHTML = `${array_element} <button>Eliminar</button>`;

      lista_Ul.append(nodeLi);
    });

  } else {

    array.forEach((array_element) => {

      const nodeLi = document.createElement("li");

      nodeLi.textContent = array_element;

      lista_Ul.append(nodeLi);
    });
  }
}

// C. event listeners

const form = document.querySelector("form");

// isto nao é ideal, se quiser executar mais que uma função nao funciona,
//  o .onsubmit mais recente faz override ao anterior
//mas foi o que o prof pediu no lab6
form.onsubmit = guardaCarta;

//dentro desta ul vai buscar os butoes
const listaButoes = nodeUlColecaoRepetidos.querySelectorAll("button");

listaButoes.forEach(function(butao){

  butao.onclick = function(){



  }

});
