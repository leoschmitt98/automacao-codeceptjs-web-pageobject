const { I } = inject();

module.exports = {
  realizarLogin(email, senha) {
    I.amOnPage('/');
    I.click('Signup / Login');
    I.fillField('[data-qa="login-email"]', email);
    I.fillField('[data-qa="login-password"]', senha);
    I.click('[data-qa="login-button"]');
    I.see('Delete Account');
    I.see('Cart');
  },

  adicionarProdutoAoCarrinho() {
    I.scrollTo('text=BRANDS');
    I.click('Polo');
    I.click('a[href="/product_details/29"]');
    I.click('Add to cart');
    I.waitForText('Added!', 5);
    I.click('View Cart');
  },

  removerProdutoDoCarrinho() {
    I.click('.cart_quantity_delete');
  },
};
