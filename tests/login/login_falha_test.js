const LoginPage = require('../../pages/LoginPage');


Feature('Login com Falha usando Page Object');

Scenario('Login sem senha', async ({ I }) => {
  const loginPage = new LoginPage(I);

  await loginPage.acessarPaginaLogin();
  await loginPage.preencherEmail('lschmitt590@gmail.com');
  await loginPage.clicarLogin();
  await loginPage.verificarCampoSenhaObrigatorio();
});

Scenario('Login sem email', async ({ I }) => {
  const loginPage = new LoginPage(I);

  await loginPage.acessarPaginaLogin();
  await loginPage.preencherSenha('123456');
  await loginPage.clicarLogin();
  await loginPage.verificarCampoEmailObrigatorio();
});

Scenario('Login com email inválido', async ({ I }) => {
  const loginPage = new LoginPage(I);

  await loginPage.acessarPaginaLogin();
  await loginPage.preencherEmail('lschmitt59@gmail.com'); // errado
  await loginPage.preencherSenha('123456');
  await loginPage.clicarLogin();
  await loginPage.verificarErroSenhaInvalida();
});

Scenario('Login com senha inválida', async ({ I }) => {
  const loginPage = new LoginPage(I);

  await loginPage.acessarPaginaLogin();
  await loginPage.preencherEmail('lschmitt590@gmail.com');
  await loginPage.preencherSenha('1234567'); // errado
  await loginPage.clicarLogin();
  await loginPage.verificarErroSenhaInvalida();
});
