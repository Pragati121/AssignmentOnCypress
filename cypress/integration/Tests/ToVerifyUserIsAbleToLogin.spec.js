it('sign up test',function(){
    cy.login()
    cy.title().should('be.equal','STORE')
    })