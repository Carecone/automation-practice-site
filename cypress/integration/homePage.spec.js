describe('Tests Home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Home Page - with three Sliders only', () =>{
        cy.shopMenuButton();
        cy.homeButton();
        cy.countSliders();
    })

})