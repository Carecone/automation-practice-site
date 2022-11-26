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
        cy.basket();
        cy.addMoreBook(2);
    })

    it('Home-Arrivals-Add to Basket-Items-Coupon', () => {
        cy.clickImage('title', 'Selenium Ruby');
        cy.addBasket('500');
        cy.basket();
        cy.addCoupon('krishnasakinala')
        cy.validateCoupon('krishnasakinala');
    })

    it('Home-Arrivals-Add to Basket-Items-Coupon value<450', () => {
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.addCoupon('krishnasakinala')
        cy.errorCoupon('The minimum spend for this coupon is ₹450.00.')
    })

    it('Home-Arrivals-Add to Basket-Items-Remove book', () => {
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.removeBook();
    })

    it('Home-Arrivals-Add to Basket-Items-Add book', () => {
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.addMoreBook(10);
        cy.updateBasket();
    })

    it('Home-Arrivals-Add to Basket-Items-Check-out-Book Final price', () => {
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.price();
    })

    it('Home-Arrivals-Add to Basket-Items-Check-out-Update Basket', () => {
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.addMoreBook(10);
        cy.updateBasket();
    })

    it('Home-Arrivals-Add to Basket-Items-Check-out-Total & Sub-total condition', () => {
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.totalPrice();
    })

    it.only('Home-Arrivals-Add to Basket-Items-Check-out functionality', () =>{
        cy.clickImage('title', 'Selenium Ruby');
        cy.addBasket('500');
        cy.basket();
        cy.checkout();
    })
})