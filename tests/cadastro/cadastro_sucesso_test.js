const CadastroPage = require('../../pages/CadastroPage');

Feature('Cadastro');

Scenario('Cadastro com sucesso usando Page Object', async ({ I }) => {
  const cadastroPage = new CadastroPage(I);
  const user = cadastroPage.gerarUsuario();

  console.log(`Criando conta para: ${user.name} ${user.lastName}`);

  await cadastroPage.cadastrarNovoUsuario(user);
});
