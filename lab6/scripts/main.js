// declaracao de variaveis

const nodeInputNumero = document.querySelector(
  " #colecao ~ section input[type = 'number'] ",
);
const nodeInputSubmit = document.querySelector(
  " #colecao ~ section input[type='submit'] ",
);
const nodeUlColecao = document.querySelector(" #colecao ul ");

const colecao = [];

// B. event handlers
function guardaCarta(e) {
  e.preventDefault; // para nao fazer refresh quando se faz submit

  colecao.push(nodeInputNumero.value);

  colecao.sort(function (a, b) {
    return a - b;
  });
}

function atualizaLista(colecao, nodeUlColecao) {
    nodeUlColecao.innerHTML = "";

}
