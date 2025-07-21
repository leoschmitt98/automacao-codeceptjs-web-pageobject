const CadastroPage = require('../../pages/CadastroPage');

Feature('Falhas no Cadastro usando Page Objects');

Scenario('Cadastro sem preencher nenhum campo', async ({ I }) => {
  const cadastroPage = new CadastroPage(I);
  await cadastroPage.tentarCadastroSemPreencherCamposHtml5();
});

Scenario('Cadastro sem email', async ({ I }) => {
  const cadastroPage = new CadastroPage(I);
  await cadastroPage.tentarCadastroSemEmailHtml5('João Teste');
});

Scenario('Cadastro sem nome', async ({ I }) => {
  const cadastroPage = new CadastroPage(I);
  await cadastroPage.tentarCadastroSemNomeHtml5('teste@email.com');
});

Scenario('Cadastro com email já cadastrado', async ({ I }) => {
  const cadastroPage = new CadastroPage(I);
  await cadastroPage.tentarCadastroEmailExistente('Luis Schmitt', 'lschmitt590@gmail.com');
});
