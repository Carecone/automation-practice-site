Cypress.Commands.add('shopMenuButton', () => {
    cy.contains('a', 'Shop').should('be.visible').click();
});

Cypress.Commands.add('homeButton', () => {
    cy.contains('a', 'Home').should('be.visible').click();
});

Cypress.Commands.add('countElement', (element, qtd) => {
    cy.get(element).should('have.length', qtd).should('be.visible');
});

Cypress.Commands.add('clickImage', (type, text) => {
    cy.contains('a', 'Shop').should('be.visible').click();
    cy.contains('a', 'Home').should('be.visible').click();
    cy.get(`img[${type}="${text}"]`).should('be.visible').click();
    cy.contains('h1', text).should('be.visible');
});

Cypress.Commands.add('description', (type, text) => {
    cy.contains('a', 'Description').click()
    cy.contains('h2', 'Product Description').should('be.visible');
})

Cypress.Commands.add('review', (type, text) => {
    cy.contains('a', 'Reviews').click();
    cy.contains('h2', 'Reviews').should('be.visible').click();
})

Cypress.Commands.add('addBasket', (value) => {
    cy.get('.single_add_to_cart_button').should('be.visible').click();
    cy.get('.wpmenucart-contents').should('be.visible').should('have.text', `1 item₹${value}.00`);
})