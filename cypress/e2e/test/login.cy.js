const loginPage = require("../page/login.page")
const accounts = require('../data/accounts.data')

describe("Login Test", () => {
    it("Login with a valid user", () => { 
        cy.visit('https://www.saucedemo.com/')
        loginPage.login("standard_user", "secret_sauce")
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
})