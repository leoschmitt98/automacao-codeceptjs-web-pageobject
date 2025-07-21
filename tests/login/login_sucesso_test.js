const LoginPage = require('../../pages/LoginPage');


Feature('Login com Sucesso usando Page Object');

Scenario('realizando login com sucesso', async ({ I }) => {
  const loginPage = new LoginPage(I);

  await loginPage.acessarPaginaLogin();
  await loginPage.preencherEmail('lschmitt590@gmail.com');
  await loginPage.preencherSenha('123456');
  await loginPage.clicarLogin();
  await loginPage.verificarLoginSucesso();
});
