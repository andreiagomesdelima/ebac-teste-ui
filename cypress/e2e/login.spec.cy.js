/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() =>{
        cy.screenshot()
    })
  
    it('Deve fazer login com sucesso', () =>{
        cy.get('[id="username"]').type("aluno_ebac@teste.com")
        cy.get('[id="password"]').type('teste@teste.com')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

        cy.get('#main > header > h1').should('contain', 'Minha conta')

    })

    it('deve exibir uma mensagem de erro ao inserir usuario inválido', () =>{
        cy.get('[id="username"]').type("ebac@teste.com")
        cy.get('[id="password"]').type('teste@teste.com')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro:  o e-mail ebac@teste.com está incorreta')

    })

    it('deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.get('[id="username"]').type("aluno_ebac@teste.com")
        cy.get('[id="password"]').type('teste@teste')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: o e-mail ebac@teste.com está incorreta.Perdeu a senha?')


    })
    
    
})