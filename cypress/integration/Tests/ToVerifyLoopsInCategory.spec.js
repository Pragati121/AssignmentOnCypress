import ToVerifyLoopsInCategory from "../../Pages/ToVerifyLoopsInCategory"
const category = new ToVerifyLoopsInCategory
it('loops test',function(){
    cy.login()
    category.loop()
    cy.Logout()
})
