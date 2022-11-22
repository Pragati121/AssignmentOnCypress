import Chance from 'chance'
const chance = new Chance()
const randomName = chance.name()

before(function(){
    cy.fixture('information').then(function(data)
    {
        this.data=data
    })
})
class SignPage {
    clickonsignupbutton = "//a[@id='signin2']";
    Password = "//input[@id='sign-password']";
    SignUp = "(//button[contains(@class,'btn btn-primary')])[2]";
    loginbuton = "//a[@id='login2']";
    username = "//input[@id='loginusername']";
    password = "//input[@id='loginpassword']";
    login = "//button[contains(text(),'Log in')]";
    navigate() {
        cy.visit('https://www.demoblaze.com')
    }
    clickonsignup() {
        cy.xpath(this.clickonsignupbutton).click()
    }
    Addingdetails() {
        cy.wait(2000)
        cy.get('#sign-username').should('be.visible').click({ force: true }).type(randomName)
        cy.xpath(this.Password).click({ force: true }).type('133444')
    }
    Signupbutton() {
        cy.xpath(this.SignUp).click()
    }
    clickonlogin() {
        cy.xpath(this.loginbuton).click()
    }
    enterusername() {
        cy.wait(2000)
        cy.xpath(this.username).should('be.visible').click({ force: true }).type(randomName)
    }
    enterpassword() {
        cy.xpath(this.password).click({ force: true }).type('133444')
    }
    click() {
        cy.xpath(this.login).click()
        cy.wait(500)
    }
}
export default SignPage

