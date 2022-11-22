class ToVerifyItemsInTheCArt{
    clickonapple="//a[contains(text(),'Apple monitor 24')]";
    clickonaddtocart="//a[contains(text(),'Add to cart')]";
    clcikoncart="(//a[@class='nav-link'])[4]";
    clickonplaceorder="//button[contains(text(),'Place Order')]";
    entername="(//input[@type='text'])[4]";
    entercountry="(//input[@type='text'])[5]";
    entercity= "(//input[@type='text'])[6]";
    entercard="//input[@id='card']";
    entermonth="//input[@id='month']";
    enteryear="//input[@id='year']";
    clickonpurchase="//button[contains(text(),'Purchase')]";
    clickonOk="//button[contains(text(),'OK')]";

    ClickOnNextPage(){
        cy.get('page-link').click()
       cy.xpath(this.clickonapple).click()
       cy.xpath(this.clickonaddtocart).click()
       cy.xpath(this.clcikoncart).click()
       cy.xpath(this.clickonplaceorder).click()
       cy.xpath(this.entername).click().type('Elbert')
       cy.xpath(this.entercountry).type('India')
       cy.xpath(this.entercity).type('Chandigarh')
       cy.xpath(this.entercard).type('Sbi')
       cy.xpath(this.entermonth).type('November')
       cy.xpath(this.enteryear).type('2022')
       cy.xpath(this.clickonOk).should('be.visible').click()
    }
}
export default ToVerifyItemsInTheCArt