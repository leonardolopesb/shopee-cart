// 1- adicionar ou acrescentar um item ao carrinho
async function addItem(userCart, item) {
  const index = userCart.findIndex((p) => p.name === item.name);

  if (index !== -1) {
    userCart[index].quantity += item.quantity;
  } else {
    userCart.push(item);
  }
}

// 2- remover uma unidade de item do carrinho
async function removeItem(userCart, item) {
    const index = userCart.findIndex((p) => p.name === item.name);

    // se o item não for encontrado
    if (index == -1)
        console.log("item não encontrado");

    // se o item for encontrado, diminuir a quantidade ou remover o produto do carrinho
    else {
        // se houver mais de um item, diminui a quantidade do item
        if (userCart[index].quantity > 1)
            userCart[index].quantity -= 1;

        // se for o último item, remove o produto do carrinho
        else if (userCart[index].quantity == 1)
            userCart.splice(index, 1);
    }

    return;
}

// 3- deletar um item do carrinho pelo ID do produto
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// 4- calcular o valor final do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nO valor final do carrinho é: R$${result}`);
}

// 5- exibir o carrinho
async function displayCart(userCart) {
  console.log("\nLista de produtos no carrinho:");

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | quantidade: ${item.quantity} | Subtotal = R$ ${item.subtotal()}`
    );
  });
}

export { addItem, removeItem, deleteItem, calculateTotal, displayCart };