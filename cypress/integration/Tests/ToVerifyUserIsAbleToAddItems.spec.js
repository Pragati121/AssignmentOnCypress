import ToVerifyUserIsAbleToAddItems from "../../Pages/ToVerifyUserIsAbleToAddItems"
const object= new ToVerifyUserIsAbleToAddItems
it('add items to cart',function(){
    cy.login()
    object.clickonmobile()
    object.addingitem()
    object.clickcart()
    object.placeorder()
    cy.Logout()
})