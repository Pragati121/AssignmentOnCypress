class ToVerifyLoopsInCategory {
    productCategories = '//a[@id="itemc"]';
    loop() {
        let countOfElements = 0;
        let count = 0;
        cy.xpath(this.productCategories).then($elements => {
         countOfElements = $elements.length;
         for (let i = 0; i < countOfElements; i++) {
            cy.xpath(this.product).eq(i - count).click()
            count++

            }

        })
    }
}
export default ToVerifyLoopsInCategory
