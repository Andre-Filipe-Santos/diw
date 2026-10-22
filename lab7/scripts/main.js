// A. Estado e variáveis com referência de elementos do DOM

// B. Funções utilitárias
 
// C. Event handlers
function renderizarProdutos(produtos){
   produtos.forEach((element) => {

    const newArticle = document.createElement("article");
    const newH2 = document.createElement("h2");
    const newP = document.createElement("p");

    newH2.textContent = element.title;
    
   });
}
 
// D. Event Listeners
 
// E. Inicialização
renderizarProdutos();