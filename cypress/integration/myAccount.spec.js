describe('Tests My account', () =>{
    beforeEach(() =>{
        cy.visit('/');
    })

    it.only('My Accounts-Dashboard.', () =>{
        cy.myAccount();
        cy.loginSuccess('testinglogin@gmail.com', 'Zxky12345*');
        cy.myAccount();
        cy.viewDashboard();
    })

    it.only('My Accounts-Orders.', () =>{
        cy.myAccount();
        cy.loginSuccess('testinglogin@gmail.com', 'Zxky12345*');
        cy.myAccount();
        cy.viewOrders();
    })

    it.only('My Accounts-Orders.', () =>{
        cy.myAccount();
        cy.loginSuccess('testinglogin@gmail.com', 'Zxky12345*');
        cy.myAccount();
        cy.viewOrders();
        cy.openOrder('15066');
    })

    it('My Accounts-Orders.', () =>{

    })

    it('My Accounts-Address Functionality.', () =>{

    })

    it('My Accounts-Address Functionality.', () =>{

    })

    it('My Accounts-Account Details.', () =>{

    })

    it(' My Accounts-Log-Out.', () =>{

    })
})