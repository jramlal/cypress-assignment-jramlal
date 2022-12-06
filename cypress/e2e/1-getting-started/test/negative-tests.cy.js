const loginPage = require("../page/login.page")

describe("Negative Login Test", () => {
    it("should not allow login without a valid user", () => { 
        cy.visit('/')
        loginPage.login("non_standard_user", "secret_sauce") 
    
        cy.get(loginPage.loginAlertMsg).should('include.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    }) 
})


describe("Negative Test for authenticated access", () => {
    it("should not be able to access the inventory page without signing in", () => { 
        cy.visit('inventory.html',{failOnStatusCode: false})

    
        cy.get(loginPage.loginAlertMsg).should('include.text', "Epic sadface: You can only access '/inventory.html' when you are logged in.")
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})