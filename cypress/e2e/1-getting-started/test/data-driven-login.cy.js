const loginPage = require("../page/login.page")
const accountsData = require("../data/accounts.data")

describe(" Data-Driven Login Test", () => {
    for(const record of accountsData){
        it(`should try to login with ${record.username}`, () => { 
            cy.visit('/')
            loginPage.login(record.username, record.password)
            if(record.username === "non_standard_user" || record.username === "locked_out_user" ){
                cy.url().should('eq', record.expectedUrl)
                cy.get(loginPage.loginAlertMsg).should('include.text', record.errorMsg)
            } else {
                cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
            }
        })
    }
})