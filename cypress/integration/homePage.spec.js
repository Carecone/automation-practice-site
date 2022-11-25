describe('Tests Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Home Page - with three Sliders only', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.n2-ss-slide-background-image', 3);
    })

    it('Home page - with three Arrivals only', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
    })

    it('Home page - Images in Arrivals should navigate', () => {
        cy.clickImage('title', 'Selenium Ruby');
    })

    it('Home page - Arrivals-Images-Description', () => {
        cy.clickImage('title', 'Thinking in HTML');
        cy.description();
    })

    it('Home page - Arrivals-Images-Reviews', () => {
        cy.clickImage('title', 'Selenium Ruby');
        cy.review();
    })

    it('Home page - Arrivals-Images-Add to Basket', () => {
        cy.clickImage('title', 'Selenium Ruby');
        cy.addBasket('500');
    })

    it('Home page - Arrivals-Add to Basket with more books', () => {
        cy.clickImage('title', 'Selenium Ruby');
        cy.addManyToBasket();
    })

    it('Home-Arrivals-Add to Basket-Items', () => {
        cy.clickImage('title', 'Selenium Ruby');
        cy.addBasket('500');
        cy.addMoreBook(2);
    })
})