// A. Estado e variáveis com referência de elementos do DOM

const produtosHTML = document.querySelector("#produtos");

if( !localStorage.getItem("produtosSelecionados")){

    localStorage.setItem("produtosSelecionados",JSON.stringify([]))    
}



// B. Funções utilitárias
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

  newAddButton.addEventListener("click", function(e){

    e.preventDefault;

    let produtosSelecionados = JSON.parse(localStorage.getItem("produtosSelecionados")) || [];

    produtosSelecionados.push(produto);

    localStorage.setItem("produtosSelecionados", JSON.stringify(produtosSelecionados));
    


  });

  newArticle.append(
    newTitle,
    newImage,
    newPrice,
    newRating,
    newDescription,
    newAddButton,
  );

  return newArticle;
}

// C. Event handlers
function renderizarProdutos(produtos) {
  produtosHTML.innerHTML = "";

  produtos.forEach((produto) => {
    const newDiv = document.createElement("div");

    const newArticle = criarProduto(produto); //cria produto para cada elemento da lista

    newDiv.append(newArticle);

    produtosHTML.append(newDiv);
  });
}

// D. Event Listeners

// E. Inicialização
renderizarProdutos(produtos);
