import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [], myWhishList = [];

console.log("\nBem-vindo ao seu carrinho da Shopee! 🛒");

// exibindo a lista de desejos com produtos que não estão no carrinho
myWhishList.push("pré-treino", "cafeína", "vitaminas em cápsulas");
console.log("\nLista de desejos:", myWhishList.join(", "));

// criando dois itens
const item1 = await createItem("whey proteína", 119.90, 1);
const item2 = await createItem("creatina", 89.99, 2);
const item3 = await createItem("barrinha de proteína", 15.99, 4);
const item4 = await createItem("pasta de amendoim", 50.00, 1);
const item5 = await createItem("hipercalórico", 64.90, 1);

// adicionando os dois itens acima ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);

// removendo um item do carrinho
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item3); 

// deletando um item do carrinho (pasta de amendoim)
await cartService.deleteItem(myCart, item4.name);
console.log(`\nItem ${item4.name} deletado do carrinho.`);

// exibindo o carrinho
await cartService.displayCart(myCart);

// calculando o valor final do carrinho
await cartService.calculateTotal(myCart);