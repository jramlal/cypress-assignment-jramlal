class cartPage{
    //selectors
    get checkoutBtn() { return ('#checkout')}
    get continueBtn() {return ('#continue')}
    get finishBtn() {return ('#finish')}
    get removeFromCartBtn() {return ('#remove-sauce-labs-backpack')}

    get firstname() { return ('#first-name')}
    get lastname() { return ('#last-name')}
    get zipcode() { return ('#postal-code')}

    get orderMsg() {return ('.checkout_complete_container h2')}
    
    //methods
    checkout(){
        cy.get(this.checkoutBtn).click()
        cy.get(this.firstname).type('Lion')
        cy.get(this.lastname).type('Heart')
        cy.get(this.zipcode).type('12345')

        cy.get(this.continueBtn).click() 
        cy.get(this.finishBtn).click() 
    } 
}

export default new cartPage()