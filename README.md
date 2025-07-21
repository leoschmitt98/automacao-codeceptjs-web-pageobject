# Automação de Testes com CodeceptJS - Page Objects

Este repositório contém testes automatizados desenvolvidos em **JavaScript** com o framework **CodeceptJS**, utilizando o padrão **Page Object Model (POM)**.  
Foi criado como parte do meu aprendizado em QA e testes de software, aplicando boas práticas para estruturar cenários de forma organizada e escalável.

---

## **📁 Estrutura do Projeto**
- **pages/**  
  Contém os arquivos de Page Object, onde ficam as funções e seletores de cada página.

- **tests/**  
  Contém os arquivos de testes, divididos por funcionalidades:
  - **cadastro/**: testes de cadastro com sucesso e falha.
  - **login/**: testes de login com sucesso e falha.
  - **carrinho/**: testes de adicionar e remover produtos.

---

## **⚙️ Tecnologias Utilizadas**
- **Node.js**  
- **CodeceptJS**  
- **Playwright** (como driver do navegador)

---

## **▶️ Como Executar os Testes**
1. Instale as dependências:
   ```bash
   npm install
