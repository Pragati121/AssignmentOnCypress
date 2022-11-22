class ToVerifyUserIsAbleToAddItems {

    clickonphone = "//a[contains(text(),'Samsung galaxy s6')]";
    additemincart = "//a[contains(text(),'Add to cart')]";
    clickoncart = "//a[contains(text(),'Cart')]";
    clickonplaceorer = "//button[contains(text(),'Place Order')]";

    clickonmobile() {
        cy.xpath('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click()
        // cy.get('a').contains('Samsung galaxy s6').click()
       
    }

    addingitem() {
        cy.xpath(this.additemincart).should('be.visible').click({ force: true })
    }

    clickcart() {
        cy.xpath(this.clickoncart).click()
    }

    placeorder() {
        cy.xpath(this.clickonplaceorer).click()
    }
}

export default ToVerifyUserIsAbleToAddItems
