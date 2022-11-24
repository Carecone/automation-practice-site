Cypress.Commands.add('shopMenuButton', () => {
    cy.get('a[id="menu-icon"]').click();
    cy.contains('a', 'Shop').should('be.visible').click();
});

Cypress.Commands.add('homeButton', () => {
    cy.contains('a', 'Home').should('be.visible').click();
});

Cypress.Commands.add('countElement', (element, qtd) => {
    cy.get(element).should('have.length', qtd).should('be.visible');
});

Cypress.Commands.add('clickImage', (type, text) => {
    cy.get('a[id="menu-icon"]').should('be.visible').click();
    cy.contains('a', 'Shop').should('be.visible').click();
    cy.contains('a', 'Home').should('be.visible').click();
    cy.get(`img[${type}="${text}"]`).should('be.visible').click();
    cy.contains('h1', text).should('be.visible');
});

Cypress.Commands.add('description', (type, text) => {
    cy.get('a[id="menu-icon"]').should('be.visible').click();
    cy.contains('a', 'Shop').should('be.visible').click();
    cy.contains('a', 'Home').should('be.visible').click();
    cy.get(`img[${type}="${text}"]`).should('be.visible').click();
    cy.contains('h1', text).should('be.visible');
    cy.contains('a', 'Description').click()
    cy.contains('h2', 'Product Description').should('be.visible');
})

Cypress.Commands.add('review', (type, text) => {
    cy.get('a[id="menu-icon"]').should('be.visible').click();
    cy.contains('a', 'Shop').should('be.visible').click();
    cy.contains('a', 'Home').should('be.visible').click();
    cy.get(`img[${type}="${text}"]`).should('be.visible').click();
    cy.contains('h1', text).should('be.visible');
    cy.contains('a', 'Reviews').click();
    cy.contains('h2', 'Reviews').should('be.visible').click();
})

Cypress.Commands.add('addBasket', (type, text, value) => {
    cy.get('a[id="menu-icon"]').should('be.visible').click();
    cy.contains('a', 'Shop').should('be.visible').click();
    cy.contains('a', 'Home').should('be.visible').click();
    cy.get(`img[${type}="${text}"]`).should('be.visible').click();
    cy.contains('h1', text).should('be.visible');
    cy.get('.single_add_to_cart_button').should('be.visible').click();
    cy.get('a[id="menu-icon"]').click();
    cy.get('.wpmenucart-contents').should('be.visible').should('have.text', `1 item₹${value}.00`);
})