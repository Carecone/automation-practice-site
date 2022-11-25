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

Cypress.Commands.add('description', () => {
    cy.contains('a', 'Description').click()
    cy.contains('h2', 'Product Description').should('be.visible');
});

Cypress.Commands.add('review', () => {
    cy.contains('a', 'Reviews').click();
    cy.contains('h2', 'Reviews').should('be.visible').click();
});

Cypress.Commands.add('addBasket', (value) => {
    cy.get('.single_add_to_cart_button').should('be.visible').click();
    cy.get('.wpmenucart-contents').should('be.visible').should('have.text', `1 item₹${value}.00`);
});

Cypress.Commands.add('addManyToBasket', () => {
    cy.get('.in-stock').invoke('text').then((value) => {
        value = value.replace(' in stock', '');
        var DECIMAL = 10
        var qtd = parseInt(value, DECIMAL) + parseInt(1, DECIMAL);
        cy.get('input[type="number"]').type(`{backspace}${qtd}`);
        cy.get('.single_add_to_cart_button').should('be.visible').click();
        cy.get('.qty:invalid')
            .invoke('prop', 'validationMessage')
            .should('equal', `O valor deve ser menor ou igual a ${value}.`)
    });
});

Cypress.Commands.add('basket', () => {
    cy.contains('.button', 'View Basket').should('be.visible').click();
})

Cypress.Commands.add('addMoreBook', (qtd) => {
    cy.get('input[type="number"]').type(`{backspace}${qtd}`);
    cy.get('input[name="update_cart"]').should('be.enabled');
})

Cypress.Commands.add('addCoupon', (coupon) => {
    cy.get('input[name="coupon_code"]').should('be.visible').type(coupon);
    cy.get('input[name="apply_coupon"]').should('be.visible').click();
})

Cypress.Commands.add('validateCoupon', (coupon) => {
    cy.contains('th', `Coupon: ${coupon}`).should('be.visible');
})

Cypress.Commands.add('errorCoupon', (error) => {
    cy.contains('li', error).should('be.visible');
})

Cypress.Commands.add('removeBook', () => {
    cy.get('a[class="remove"]').should('be.visible').click();
    cy.contains('a', 'Undo?').should('be.visible');
})

Cypress.Commands.add('updateBasket', () => {
    cy.get('input[name="update_cart"]').click();
    cy.contains('.woocommerce-message', 'Basket updated.').should('be.visible');
})

Cypress.Commands.add('price', () => {
    cy.get('td[class="product-subtotal"]').should('be.visible');
})

Cypress.Commands.add('totalPrice', () => {
    cy.get('td[data-title="Total"]').invoke('text').then((total) => {
        cy.get('td[data-title="Subtotal"]').invoke('text').then((subtotal) => {
            total = total.replace('\n\t\t\t\t\t\t', '')
            cy.expect(total).not.be.equals(subtotal);
        })
    })
})