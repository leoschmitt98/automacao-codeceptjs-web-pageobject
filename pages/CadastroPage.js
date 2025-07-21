const { faker } = require('@faker-js/faker');

class CadastroPage {
  constructor(I) {
    this.I = I;
  }

  acessarPaginaCadastro() {
    this.I.amOnPage('/');
    this.I.click('Signup / Login');
  }

  gerarUsuario() {
    return {
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: '123456',
      day: '7',
      month: 'January',
      year: '1998',
      company: 'LeoShop',
      address: 'Rua Do Leo,526 Vila Nova',
      country: 'Canada',
      state: 'Rio Grande',
      city: 'Igrejinha',
      zipcode: '95650000',
      mobile: '51996352441'
    };
  }

  async cadastrarNovoUsuario(user) {
    this.acessarPaginaCadastro();
    this.I.fillField('Name', `${user.name} ${user.lastName}`);
    this.I.fillField('[data-qa="signup-email"]', user.email);
    this.I.click('[data-qa="signup-button"]');

    this.I.see('ENTER ACCOUNT INFORMATION');

    this.I.click('#id_gender1');
    this.I.fillField('#password', user.password);
    this.I.selectOption('#days', user.day);
    this.I.selectOption('#months', user.month);
    this.I.selectOption('#years', user.year);

    this.I.fillField('#first_name', user.name);
    this.I.fillField('#last_name', user.lastName);
    this.I.fillField('#company', user.company);
    this.I.fillField('#address1', user.address);
    this.I.selectOption('#country', user.country);
    this.I.fillField('#state', user.state);
    this.I.fillField('#city', user.city);
    this.I.fillField('#zipcode', user.zipcode);
    this.I.fillField('#mobile_number', user.mobile);

    this.I.click('[data-qa="create-account"]');
    this.I.see('ACCOUNT CREATED!');
  }

  async tentarCadastroSemPreencherCamposHtml5() {
    this.acessarPaginaCadastro();
    this.I.click('[data-qa="signup-button"]');
    this.I.seeElement('[data-qa="signup-name"]:invalid');
    this.I.seeElement('[data-qa="signup-email"]:invalid');
  }

  async tentarCadastroSemEmailHtml5(nome) {
    this.acessarPaginaCadastro();
    this.I.fillField('[data-qa="signup-name"]', nome);
    this.I.click('[data-qa="signup-button"]');
    this.I.seeElement('[data-qa="signup-email"]:invalid');
  }

  async tentarCadastroSemNomeHtml5(email) {
    this.acessarPaginaCadastro();
    this.I.fillField('[data-qa="signup-email"]', email);
    this.I.click('[data-qa="signup-button"]');
    this.I.seeElement('[data-qa="signup-name"]:invalid');
  }

  async tentarCadastroEmailExistente(nome, email) {
    this.acessarPaginaCadastro();
    this.I.fillField('[data-qa="signup-name"]', nome);
    this.I.fillField('[data-qa="signup-email"]', email);
    this.I.click('[data-qa="signup-button"]');
    this.I.waitForText('Email Address already exist!', 5);
  }
}

module.exports = CadastroPage;
