const assert = require('assert');

class LoginPage {
  constructor(I) {
    this.I = I;
    this.loginEmailField = '[data-qa="login-email"]';
    this.loginPasswordField = '[data-qa="login-password"]';
    this.loginButton = '[data-qa="login-button"]';
    this.signupLoginButton = 'Signup / Login';
  }

  async acessarPaginaLogin() {
    this.I.amOnPage('/');
    this.I.click(this.signupLoginButton);
  }

  async preencherEmail(email) {
    this.I.fillField(this.loginEmailField, email);
  }

  async preencherSenha(senha) {
    this.I.fillField(this.loginPasswordField, senha);
  }

  async clicarLogin() {
    this.I.click(this.loginButton);
  }

  async verificarLoginSucesso() {
    this.I.see('Delete Account');
    this.I.see('Cart');
  }

  async verificarErroSenhaInvalida() {
    this.I.see('Your email or password is incorrect!');
  }

  async verificarCampoSenhaObrigatorio() {
    this.I.seeElement(`${this.loginPasswordField}:invalid`);
  }

  async verificarCampoEmailObrigatorio() {
    this.I.seeElement(`${this.loginEmailField}:invalid`);
  }
}

module.exports = LoginPage;
