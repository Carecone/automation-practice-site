describe('Tests Home page', () => {
    beforeEach(() => {
        cy.visit('/')
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
    
    it('Home page - Arrivals-Images-Description', () =>{
        cy.description('title', 'Thinking in HTML');
    })

    it('Home page - Arrivals-Images-Reviews', ()=>{
        cy.review('title', 'Mastering JavaScript');
    })

    it('Home page - Arrivals-Images-Add to Basket', () =>{
        cy.addBasket('title', 'Selenium Ruby', '500');
    })
})