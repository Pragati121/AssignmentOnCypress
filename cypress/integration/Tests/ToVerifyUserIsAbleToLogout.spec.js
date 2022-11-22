it('logout test',function(){
    cy.login()
    cy.Logout()
    cy.title().should('be.equal','STORE')
})