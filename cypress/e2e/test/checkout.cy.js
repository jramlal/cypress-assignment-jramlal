const productPage = require('../page/product.page')
const cartPage = require('../page/cart.page')
const loginPage = require('../page/login.page')


describe("Checkout Test", () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it("Add single item to cart and checkout", () => {
        loginPage.login("standard_user", "secret_sauce")
        
        cy.get(productPage.addToCartBtn1).click()
        
        cy.get(productPage.openCartBtn).should('be.visible')
        cy.get(productPage.openCartBtn).click()
        
        cartPage.checkout()
        
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    })  

    it("Add mulitple items to cart and checkout", () => {
        loginPage.login("standard_user", "secret_sauce")
        
        cy.get(productPage.addToCartBtn1).click()
        cy.get(productPage.addToCartBtn2).click()
        
        cy.get(productPage.openCartBtn).should('be.visible')
        cy.get(productPage.openCartBtn).click()
        
        cartPage.checkout()
        
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    })

    
    it("Remove item from cart", () => {
        loginPage.login("standard_user", "secret_sauce")
        
        cy.get(productPage.addToCartBtn1).click()
    
        cy.get(productPage.openCartBtn).should('be.visible')
        cy.get(productPage.openCartBtn).click()
    
        cy.get(productPage.removeFromCartBtn).click()
        
       
        cy.get(cartPage.removeFromCartBtn).should('not.exist')
    
    })
     
    
    it("Remove item from cart (product page)", () => {
        loginPage.login("standard_user", "secret_sauce")
        
        cy.get(productPage.addToCartBtn1).click()
    
        cy.get(productPage.removeFromCartBtn).should('be.visible')
        cy.get(productPage.removeFromCartBtn).click()
        
        
        cy.get(productPage.removeFromCartBtn).should('not.exist')

    })
})