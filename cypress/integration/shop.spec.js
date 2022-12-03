describe('Tests Shop', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Shop-Filter By Price Functionality.', () => {
        cy.shopMenuButton();
        cy.adjusterFilter();
    })

    it('Shop-Product Categories Functionality.', () => {
        cy.shopMenuButton();
        cy.clickImage('title', 'Android Quick Start Guide')
    })
    
    it('Shop-Default Sorting Functionality.', () => {
        cy.shopMenuButton();
        cy.sorting('Sort by popularity');
    })
    
    it('Shop-Default Sorting Functionality.', () => {
        cy.shopMenuButton();
        cy.sorting('Sort by average rating');
    })
    
    it('Shop-Default Sorting Functionality.', () => {
        cy.shopMenuButton();
        cy.sorting('Sort by newness');
    })
    
    it('Shop-Default Sorting Functionality.', () => {
        cy.shopMenuButton();
        cy.sorting('Sort by price: low to high');
    })
    
    it('Shop-Default Sorting Functionality.', () => {
        cy.shopMenuButton();
        cy.sorting('Sort by price: high to low');
    })
    
    it('Shop-Read More Functionality.', () => {
        cy.shopMenuButton();
        cy.readMore('functional-programming-in-js');
    })
    
    it('Shop-Sale Functionality.', () => {

    })
    
    it('Shop-Add to Basket-View Basket Functionality.', () => {

    })
    
    it('Shop-Add to Basket-View Basket through Item link.', () => {

    })
    
    it('Shop-Add to Basket-View Basket-Tax Functionality.', () => {

    })
    
    
    
})