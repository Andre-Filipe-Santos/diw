// A. Estado e variáveis com referência de elementos do DOM

const produtosHTML = document.querySelector("#produtos");
const produtosCestoHTML = document.querySelector("#cesto");
const totalHTML = document.querySelector("#total");

const filterHTML = document.querySelector("#filters");

// Garante que a chave de produtos selecionados existe no arranque
if (!localStorage.getItem("produtosSelecionados")) {
  localStorage.setItem("produtosSelecionados", JSON.stringify([]));
}

// B. INICIALIZAÇÃO

renderizarProdutos(produtos);
atualizaCesto();

// C. Funções utilitárias

function criarProduto(produto) {
  const newArticle = document.createElement("article");

  const newTitle = document.createElement("h3");
  newTitle.textContent = produto.title;

  const newImage = document.createElement("img");
  newImage.src = produto.image;

  const newPrice = document.createElement("p");
  newPrice.textContent = `Custo total: ${produto.price} €`;

  const newRating = document.createElement("p");
  newRating.textContent = `Rating: ${produto.rating.rate} Nº Reviews: ${produto.rating.count}`;

  const newDescription = document.createElement("p");
  newDescription.textContent = produto.description;
  newDescription.className = "description";

  const newAddButton = document.createElement("button");
  newAddButton.type = "button";
  newAddButton.textContent = "+ Adicionar ao Cesto";

  newAddButton.addEventListener("click", function (e) {
    e.preventDefault();

    let produtosSelecionados =
      JSON.parse(localStorage.getItem("produtosSelecionados")) || [];

    produtosSelecionados.push(produto);

    localStorage.setItem(
      "produtosSelecionados",
      JSON.stringify(produtosSelecionados)
    );

    // Atualiza o cesto e o valor total
    atualizaCesto();
  });

  newArticle.append(
    newTitle,
    newImage,
    newPrice,
    newRating,
    newDescription,
    newAddButton
  );

  return newArticle;
}

function criaProdutoCesto(produto, index) {
  const newArticle = document.createElement("article");

  const newTitle = document.createElement("h3");
  newTitle.textContent = produto.title;

  const newImage = document.createElement("img");
  newImage.src = produto.image;

  const newPrice = document.createElement("p");
  newPrice.textContent = `Custo total: ${produto.price} €`;

  const newAddButton = document.createElement("button");
  newAddButton.type = "button";
  newAddButton.textContent = "- Remover do Cesto";

  newAddButton.addEventListener("click", function (e) {
    e.preventDefault();

    let produtosSelecionados =
      JSON.parse(localStorage.getItem("produtosSelecionados")) || [];

    produtosSelecionados.splice(index, 1);

    localStorage.setItem(
      "produtosSelecionados",
      JSON.stringify(produtosSelecionados)
    );

    // Atualiza o cesto e o valor total
    atualizaCesto();
  });

  newArticle.append(newTitle, newImage, newPrice, newAddButton);

  return newArticle;
}

function atualizaCesto() {
  produtosCestoHTML.innerHTML = "";

  let produtos = JSON.parse(
    localStorage.getItem("produtosSelecionados") || "[]"
  );

  produtos.forEach((produto, index) => {
    const newDiv = document.createElement("div");

    const newArticle = criaProdutoCesto(produto, index);

    newDiv.append(newArticle);

    produtosCestoHTML.append(newDiv);
  });

  // Atualiza sempre o valor total após re-renderizar o cesto
  atualizaTotal();
}

function atualizaTotal() {
  const produtosCarrinho = JSON.parse(
    localStorage.getItem("produtosSelecionados") || "[]"
  );

  // Soma o atributo .price de cada objeto no array
  const total = produtosCarrinho.reduce( (acum, produto) => acum + produto.price, 0 );

  totalHTML.textContent = `Custo Total: ${total.toFixed(2)} €`;
}

// D. Event handlers

function renderizarProdutos(produtos) {
  produtosHTML.innerHTML = "";

  produtos.forEach((produto) => {
    const newDiv = document.createElement("div");

    const newArticle = criarProduto(produto);

    newDiv.append(newArticle);

    produtosHTML.append(newDiv);
  });
}

filterHTML.addEventListener("change",);
