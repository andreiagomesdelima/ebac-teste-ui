/// <reference types="cypress" />

import EnderecoPage from './page-objects/endereco.page.cy.js';

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(d => {
            cy.login(d.nome,  d.senha)
        })
    })

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento

    })
})