/// <reference types="cypress" />
import { usuario, senha } from '../fixtures/perfil.json';


context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('[id="username"]').type("aluno_ebac@teste.com")
        cy.get('[id="password"]').type('teste@teste.com')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

        cy.get('#main > header > h1').should('contain', 'Minha conta')

    })
    it('Deve fazer login com sucesso - Usando arquivos de dados', () => {
        cy.get('[id="username"]').type(usuario)
        cy.get('[id="password"]').type(senha)
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

    });
    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('[id="username"]').type(dados.usuario)
            cy.get('[id="password"]').type(dados.senha,{log: false})
            cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

        })
    });
    it('deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.get('[id="username"]').type('ebac@teste.com')
        cy.get('[id="password"]').type('teste@teste.com')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail ebac@teste.com está incorreta. Perdeu a senha?')

    })
    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {
            cy.get('[id="username"]').type('aluno_ebac@teste.com')
            cy.get('[id="password"]').type('teste@teste')
            cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

            cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')


        })


})