Cypress.Commands.add('shopMenuButton', () =>{
    cy.get('a[id="menu-icon"]').click();
    cy.contains('a', 'Shop').click();
})

Cypress.Commands.add('homeButton', () =>{
    cy.contains('a', 'Home').click();
})

Cypress.Commands.add('countSliders', (name) =>{
    cy.get('img', 'class=["n2-ss-slide-background-image n2-ss-slide-fill n2-ow"]').should('have.length', 3)
})