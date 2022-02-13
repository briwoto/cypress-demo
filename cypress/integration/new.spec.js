/// <reference types="cypress" />

describe('New Test', () => {
	it('should open the baseurl',() => {
		cy.visit('/')
		cy.get('div#carbonads').should('be.visible')
	})
})