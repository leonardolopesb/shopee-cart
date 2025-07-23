import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("\nBem-vindo ao seu carrinho da Shopee! 🎁");

// exibindo a lista de desejos
myWhishList.push("hotwheels ferrari", "hotwheels mustang", "hotwheels camaro");
console.log("\nLista de desejos da Shopee:", myWhishList.join(", "));

// criando dois itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);
const item3 = await createItem("hotwheels porsche", 15.99, 2);
const item4 = await createItem("hotwheels bugatti", 50.00, 1);
const item5 = await createItem("hotwheels tesla", 45.00, 2);

// adicionando os dois itens acima ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);

// removendo um item do carrinho
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item3);

// deletando os dois itens do carrinho
// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);

// exibindo o carrinho
await cartService.displayCart(myCart);

// calculando o valor final do carrinho
await cartService.calculateTotal(myCart);