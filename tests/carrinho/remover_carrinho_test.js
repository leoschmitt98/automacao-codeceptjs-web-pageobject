const { I } = inject();
const cartPage = require('../../pages/CartPage');

Feature('Carrinho');

Scenario('Remover produto do carrinho', () => {
  cartPage.realizarLogin('lschmitt590@gmail.com', '123456');
  cartPage.adicionarProdutoAoCarrinho();
  cartPage.removerProdutoDoCarrinho();
  I.see('Cart is empty'); // ajuste conforme o texto real da página vazia
});
