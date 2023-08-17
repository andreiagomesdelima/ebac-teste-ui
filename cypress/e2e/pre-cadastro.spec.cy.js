/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro', () => {


    beforeEach(() => {
        cy.visit('/minha-conta/')
    });
      
    it('Deve completar o pré cadastro com sucesso', () =>{
        let nameFaker = faker.person.firstName()
        let sobrenameFaker = faker.person.lastName()
        let emailFaker = faker.internet.email(nameFaker.replace)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nameFaker)
        cy.get('#account_last_name').type(sobrenameFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')

        

    })
});
