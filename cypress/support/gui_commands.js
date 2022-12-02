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
        cy.get('input[type="number"]').clear().type(qtd);
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
    cy.get('input[type="number"]').clear().type(qtd);
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
            total = total.replace(`\n\t\t\t\t\t\t${subtotal}\t\t\t\t\t₹`, '');
            total = total.replace(' ', '');
            subtotal = subtotal.replace('₹', '');
            var DECIMAL = 10;
            total = parseInt(total, DECIMAL);
            subtotal = parseInt(subtotal, DECIMAL);
            cy.expect(total).to.be.greaterThan(subtotal);
        })
    })
})

Cypress.Commands.add('checkout', () => {
    cy.contains('a', ' Proceed to Checkout').should('be.visible').click();
    cy.contains('h3', 'Billing Details').should('be.visible');
    cy.contains('h3', 'Additional Information').should('be.visible');
    cy.contains('h3', 'Your order').should('be.visible');
    cy.get('li[class="wc_payment_method payment_method_bacs"').should('be.visible');
    cy.get('li[class="wc_payment_method payment_method_cheque"]').should('be.visible');
    cy.get('li[class="wc_payment_method payment_method_cod"]').should('be.visible');
    cy.get('li[class="wc_payment_method payment_method_ppec_paypal"]').should('be.visible');
})

Cypress.Commands.add('fillForm', (name, secondName, company, email, phone, country, address, city, state, zip) => {
    cy.get('input[name="billing_first_name"]').should('be.visible').type(name);
    cy.get('input[name="billing_last_name"]').should('be.visible').type(secondName);
    cy.get('input[name="billing_company"]').should('be.visible').type(company);
    cy.get('input[name="billing_email"]').should('be.visible').type(email);
    cy.get('input[name="billing_phone"]').should('be.visible').type(phone);
    cy.contains('span', 'India').should('be.visible').should('be.visible').type(country);
    cy.contains('span', country).should('be.visible').click();
    cy.get('input[name="billing_address_1"]').should('be.visible').type(address);
    cy.get('input[name="billing_city"]').should('be.visible').type(city);
    cy.contains('span', 'Select an option…').should('be.visible').click();
    cy.get('#s2id_autogen2_search').type(state);
    cy.contains('span', state).should('be.visible').click();
    cy.get('input[name="billing_postcode"]').should('be.visible').type(zip);
})

Cypress.Commands.add('placeOrder', () => {
    cy.get('input[name="woocommerce_checkout_place_order"]').should('be.visible').click();
})

Cypress.Commands.add('confirmOrder', () => {
    cy.contains('p', 'Thank you. Your order has been received.').should('be.visible');
    cy.contains('h2', 'Our Bank Details').should('be.visible');
    cy.contains('h2', 'Order Details').should('be.visible');
})

Cypress.Commands.add('myAccount', () => {
    cy.contains('a', 'My Account').should('be.visible').click();
})

Cypress.Commands.add('loginSuccess', (email, password) => {
    cy.get('input[id="username"]').should('be.visible').type(email);
    cy.get('input[id="password"]').should('be.visible').type(password);
    cy.get('input[name="login"]').should('be.visible').click();
    cy.contains('a', 'Sign out').should('be.visible');
})

Cypress.Commands.add('loginFail', (email, password) => {
    cy.get('input[id="username"]').should('be.visible').type(email);
    cy.get('input[id="password"]').should('be.visible').type(password);
    cy.get('input[name="login"]').should('be.visible').click();
    cy.get('ul[class="woocommerce-error"]').should('be.visible');
})

Cypress.Commands.add('passwordMasked', (password) => {
    cy.get('input[id="password"]').type(password).should('have.attr', 'type', 'password')
})

Cypress.Commands.add('signOut', () => {
    cy.contains('a', 'Sign out').click();
    cy.contains('h2', 'Login').should('be.visible');
})

Cypress.Commands.add('registrationSucess', (email, password) => {
    cy.get('input[id="reg_email"]').should('be.visible').type(email, {delay: 100});
    cy.get('input[id="reg_password"]').should('be.visible').type(password, {delay: 100});
    cy.get('input[id="reg_password"]').should('be.visible').type(password, {delay: 100});
    cy.get('input[value="Register"]').should('be.visible').click();
    cy.contains('a', 'Sign out').should('be.visible');
})

Cypress.Commands.add('registrationFail', (email, password) =>{
    cy.get('input[id="reg_email"]').should('be.visible').type(email,{delay: 100});
    cy.get('input[id="reg_password"]').should('be.visible').type(password, {delay: 100});
    cy.get('input[id="reg_password"]').should('be.visible').type(password, {delay: 100});
    cy.get('input[value="Register"]').should('be.visible').click();
    cy.get('ul[class="woocommerce-error"]').should('be.visible');
})

Cypress.Commands.add('registrationEmailFail', (email, password) =>{
    cy.get('input[id="reg_email"]').should('be.visible').type(email, {delay: 100});
    cy.get('input[id="reg_password"]').should('be.visible').type(password, {delay: 100});
    cy.get('input[id="reg_password"]').should('be.visible').type(password, {delay: 100});
    cy.get('input[value="Register"]').should('be.visible').click();
    cy.get('#reg_email:invalid')
    .invoke('prop', 'validationMessage')
    .should('equal', `Inclua um "@" no endereço de email. "${email}" não contém um "@".`)
})

Cypress.Commands.add('registrationEmptyEmail', (email, password) =>{
    cy.get('input[id="reg_email"]').should('be.visible').type(email,{delay: 100});
    cy.get('input[id="reg_password"]').should('be.visible').type(password, {delay: 100});
    cy.get('input[id="reg_password"]').should('be.visible').type(password, {delay: 100});
    cy.get('input[value="Register"]').should('be.visible').click();
    cy.get('ul[class="woocommerce-error"]').should('be.visible');
})

Cypress.Commands.add('registrationEmptyPassword', (email) =>{
    cy.get('input[id="reg_email"]').should('be.visible').type(email,{delay: 100});
    cy.get('input[value="Register"]').should('be.visible').click();
    cy.get('ul[class="woocommerce-error"]').should('be.visible');
})

Cypress.Commands.add('registrationEmptyEmailPassword', () =>{
    cy.get('input[value="Register"]').should('be.visible').click();
    cy.get('ul[class="woocommerce-error"]').should('be.visible');
})




