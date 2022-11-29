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
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Selenium Ruby');
    })

    it('Home page - Arrivals-Images-Description', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Thinking in HTML');
        cy.description();
    })

    it('Home page - Arrivals-Images-Reviews', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Selenium Ruby');
        cy.review();
    })

    it('Home page - Arrivals-Images-Add to Basket', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Selenium Ruby');
        cy.addBasket('500');
    })

    it('Home page - Arrivals-Add to Basket with more books', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Selenium Ruby');
        cy.addManyToBasket();
    })

    it('Home-Arrivals-Add to Basket-Items', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Selenium Ruby');
        cy.addBasket('500');
        cy.basket();
        cy.addMoreBook(2);
    })

    it('Home-Arrivals-Add to Basket-Items-Coupon', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Selenium Ruby');
        cy.addBasket('500');
        cy.basket();
        cy.addCoupon('krishnasakinala')
        cy.validateCoupon('krishnasakinala');
    })

    it('Home-Arrivals-Add to Basket-Items-Coupon value<450', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.addCoupon('krishnasakinala')
        cy.errorCoupon('The minimum spend for this coupon is ₹450.00.')
    })

    it('Home-Arrivals-Add to Basket-Items-Remove book', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.removeBook();
    })

    it('Home-Arrivals-Add to Basket-Items-Add book', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.addMoreBook(10);
        cy.updateBasket();
    })

    it('Home-Arrivals-Add to Basket-Items-Check-out-Book Final price', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.price();
    })

    it('Home-Arrivals-Add to Basket-Items-Check-out-Update Basket', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.addMoreBook(10);
        cy.updateBasket();
    })

    it('Home-Arrivals-Add to Basket-Items-Check-out-Total & Sub-total condition', () => {
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Mastering JavaScript');
        cy.addBasket('350');
        cy.basket();
        cy.totalPrice();
    })

    it('Home-Arrivals-Add to Basket-Items-Check-out functionality', () =>{
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Selenium Ruby');
        cy.addBasket('500');
        cy.basket();
        cy.totalPrice();
        cy.checkout();
    })

    it('Home-Arrivals-Add to Basket-Items-Check-out-Payment Gateway', () =>{
        cy.shopMenuButton();
        cy.homeButton();
        cy.countElement('.attachment-shop_catalog', 3);
        cy.clickImage('title', 'Selenium Ruby');
        cy.addBasket('500');
        cy.basket();
        cy.totalPrice();
        cy.checkout();
        cy.fillForm('Diego','Souza','fmx', 'a@gmail.com','40028922', 'Brazil', 'Rangel pestana', 'Araçatex', 'São Paulo', '16050270');
    })

    it('Home-Arrivals-Add to Basket-Items-Check-out-Payment Gateway-Place order' , () =>{
        cy.clickImage('title', 'Selenium Ruby');
        cy.addBasket(500)
        cy.basket();
        cy.totalPrice();
        cy.checkout();
        cy.fillForm('Diego','Souza','fmx', 'a@gmail.com','40028922', 'Brazil', 'Rangel pestana', 'Araçatex', 'São Paulo', '16050270');
        cy.placeOrder();
        cy.confirmOrder();
    })
})