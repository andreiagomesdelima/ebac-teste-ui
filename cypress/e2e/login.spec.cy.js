/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[id="username"]').type("aluno_ebac@teste.com")
        cy.get('[id="password"]').type('teste@teste.com')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

        cy.get('#main > header > h1').should('contain', 'Minha conta')

    })

    it.only('deve exibir uma mensagem de erro ao inserir usuario inválido', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[id="username"]').type("ebac@teste.com")
        cy.get('[id="password"]').type('teste@teste')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

    })
    it('deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[id="username"]').type("aluno_ebac@teste.com")
        cy.get('[id="password"]').type('teste@teste')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

    })
    
    
})