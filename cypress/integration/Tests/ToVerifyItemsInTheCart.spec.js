import ToVerifyItemsInTheCArt from "../../Pages/ToVerifyItemsInTheCart";
const cart = new  ToVerifyItemsInTheCArt

it('Cart items ',function(){
    cy.login()
    cart.ClickOnNextPage
})