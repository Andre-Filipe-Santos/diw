// A. Estado e variáveis com referência de elementos do DOM

const produtosHTML = document.querySelector("#produtos");

// B. Funções utilitárias
function criarProduto(produto){

    const newArticle = document.createElement("article");
    const newTitle = document.createElement("h3");
    const newImage = document.createElement("img");
    const newPrice = document.createElement("p");
    const newRating = document.createElement("p");
    const newDescription = document.createElement("p");
    const newAddButton = document.createElement("button");

    newTitle.textContent = produto.title;
    newImage.src = produto.image;
    newPrice.textContent = `Custo total: ${produto.price} €`;
    newRating.textContent = `Rating: ${produto.rating.rate} Nº Reviews: ${produto.rating.count}`;
    
    newDescription.textContent = produto.description;
    newDescription.className = "description";

    newAddButton.type = "button";
    newAddButton.textContent = "+ Adicionar ao Cesto"
     

    newArticle.append(newTitle);
    newArticle.append(newImage);
    newArticle.append(newPrice);
    newArticle.append(newRating);
    newArticle.append(newDescription);

    newArticle.append(newAddButton);

    

    return newArticle;

}
 
// C. Event handlers
function renderizarProdutos(produtos){

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