describe('Tests My account', () =>{
    beforeEach(() =>{
        cy.visit('/');
    })

    it('My Accounts-Dashboard.', () =>{
        cy.myAccount();
        cy.loginSuccess('testinglogin@gmail.com', 'Zxky12345*');
        cy.myAccount();
        cy.viewDashboard();
    })

    it('My Accounts-Orders.', () =>{
        cy.myAccount();
        cy.loginSuccess('testinglogin@gmail.com', 'Zxky12345*');
        cy.myAccount();
        cy.viewOrders();
    })

    it('My Accounts-Orders.', () =>{
        cy.myAccount();
        cy.loginSuccess('testinglogin@gmail.com', 'Zxky12345*');
        cy.myAccount();
        cy.viewOrders();
        cy.openOrder('15066');
    })

    it.only('My Accounts-Orders.', () =>{
        cy.myAccount();
        cy.loginSuccess('testinglogin@gmail.com', 'Zxky12345*');
        cy.myAccount();
        cy.viewOrders();
        cy.openOrder('15066');
        cy.orderValidate();
    })

    it('My Accounts-Address Functionality.', () =>{
        cy.myAccount();
        cy.loginSuccess('testinglogin@gmail.com', 'Zxky12345*');
        cy.myAccount();
        cy.openAddresses();
    })

    it('My Accounts-Address Functionality.', () =>{

    })

    it('My Accounts-Account Details.', () =>{

    })

    it(' My Accounts-Log-Out.', () =>{

    })
})