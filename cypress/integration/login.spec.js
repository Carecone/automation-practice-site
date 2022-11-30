describe('Tests Login', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Login with valid username and password.', () =>{
        cy.myAccount();
    })
})