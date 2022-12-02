describe('Tests registration', () =>{
    beforeEach(() =>{
        cy.visit('/');
    })

    it('Registration-Sign-in.', () =>{
        cy.myAccount();
        cy.registrationSucess('sjkydg9hfgh44565873496704586543534s@gmail.com', 'Zxky12349*');
    })

    it('Registration with invalid Email-id.', ()=>{
        cy.myAccount();
        cy.registrationEmailFail('teste123', 'Zxky12345*');
        
    })

    it('Registration with empty Email-id.', ()=>{
        cy.myAccount();
        cy.registrationEmptyEmail(' ', 'Zxky12345*');
    })

    it('Registration with empty password', ()=>{
        cy.myAccount();
        cy.registrationEmptyPassword('sjkydgashyudusdguyas@gmail.com', ' ');
    }) 

    it('Registration with empty Email-id & password.', ()=>{
        cy.myAccount();
        cy.registrationEmptyEmailPassword();
    })
})