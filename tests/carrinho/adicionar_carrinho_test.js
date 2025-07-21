const { I } = inject();
const cartPage = require('../../pages/CartPage');

Feature('Carrinho');

Scenario('Adicionar produto ao carrinho', () => {
  cartPage.realizarLogin('lschmitt590@gmail.com', '123456');
  cartPage.adicionarProdutoAoCarrinho();
  I.see('Shopping Cart');
});
