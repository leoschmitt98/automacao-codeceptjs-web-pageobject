class ProductPage {
  constructor(I) {
    this.I = I;
  }

  acessarMarca(marca) {
    this.I.scrollTo('text=BRANDS');
    this.I.click(marca);
  }

  abrirProduto() {
    this.I.click('a[href="/product_details/29"]');
  }
}

module.exports = ProductPage;
