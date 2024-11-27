// Array para armazenar os itens do carrinho
const cart = [];

// Função para adicionar item ao carrinho
function addToCart(name, price) {
  const item = { name, price: parseFloat(price) }; // Parseia o preço para número
  cart.push(item);
  alert(`${name} adicionado ao carrinho!`);
  updateCartDisplay();
  console.log(cart); // Exibe o carrinho no console para depuração
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return; // Verifica se o container do carrinho existe

  cartContainer.innerHTML = ""; // Limpa o conteúdo atual

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartContainer.appendChild(listItem);
  });

  if (cart.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.textContent = "Seu carrinho está vazio.";
    cartContainer.appendChild(emptyMessage);
  }
}

// Aguarda o DOM estar carregado para adicionar os eventos
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = button.getAttribute("data-price");
      addToCart(name, price);
    });
  });
});
