class productPage{
    //selectors
    get addToCartBtn1() { return ('#add-to-cart-sauce-labs-backpack')}
    get addToCartBtn2() { return ('#add-to-cart-sauce-labs-bike-light')}
    get openCartBtn() { return ('.shopping_cart_link')}

    get removeFromCartBtn() {return ('#remove-sauce-labs-backpack')}

    
    //methods
    // addToCart(){
    //     cy.get(this.addToCartBtn).click()
    // }
}

export default new productPage()