class Logout {
    clickonlogout = "//a[@id='logout2']";

Logoutbutton() {
    cy.xpath(this.clickonsignupbutton).click()
}
}
export default Logout

