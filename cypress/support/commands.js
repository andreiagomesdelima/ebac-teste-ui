
Cypress.Commands.add('preencherCampo', (mapCampo, texto) => {
    cy.get(mapCampo).type(texto);
})

Cypress.Commands.add('clicar', (botao) => {
    cy.get(botao).click();
})

Cypress.Commands.add('validarTexto', (textoAtualMapeamento, textoExperado) => {
    cy.get(textoAtualMapeamento).should('contain', textoExperado)
})



Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('[id="username"]').type(usuario)
    cy.get('[id="password"]').type(senha)
    cy.get('#customer_login > div:nth-child(1) > form > input.button').click()
})
Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
})
Cypress.Commands.add('addProduto', (produto, tamanho, cor, quantidade) => {
    cy.get('[class="product-block grid"]')
        .contains(produto).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
})
