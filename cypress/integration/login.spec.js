describe('Tests Login', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Login with valid username and password.', () => {
        cy.myAccount();
        cy.loginSuccess('testinglogin@gmail.com', 'Zxky12345*');
    })

    it('Login with incorrect username and incorrect password.', () => {
        cy.myAccount();
        cy.loginFail('testingerro@gmail.com', 'Zxky123*');
    })

    it('Login with correct username and empty password.', () => {
        cy.myAccount();
        cy.loginFail('testinglogin@gmail.com', ' ');
    })

    it('Login with empty username and valid password.', () => {
        cy.myAccount();
        cy.loginFail(' ', 'Zxky12345*');
    })

    it('Login with empty username and empty password.', () => {
        cy.myAccount();
        cy.loginFail(' ', ' ');
    })

    it.only('Login -Password should be masked.', () =>{
        cy.myAccount();
        cy.passwordMasked('123456');
    })
    it('Login-Handles case sensitive.', () =>{

    })
    it('Login-Authentication', () =>{

    })
})