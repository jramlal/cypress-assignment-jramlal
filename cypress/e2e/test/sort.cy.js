const loginPage = require('../page/login.page')

describe('Filter Test', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('should sort products (A - Z)', () => {
        
        loginPage.login('standard_user', 'secret_sauce') 

        cy.get('.product_sort_container').select('az')

        const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        
        products.sort() 

        cy.get('.inventory_item_name').each(($elem, index) => {
            expect($elem.text()).equal(products[index])
        })     
    })

    it('should sort products (Z - A)', () => {
        
        loginPage.login('standard_user', 'secret_sauce') 

        cy.get('.product_sort_container').select('za')

        const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        
        products.sort().reverse()

        cy.get('.inventory_item_name').each(($elem, index) => {
            expect($elem.text()).equal(products[index])
        })
        
    }) 

    it('should sort products (Low - High)', () => {
        
        loginPage.login('standard_user', 'secret_sauce') 

        cy.get('.product_sort_container').select('lohi')

        const prices = [29.99, 9.99, 15.99, 49.99, 7.99, 15.99]
        
        prices.sort(function(a, b) {
            return a - b;
        });

        cy.get('.inventory_item_price').each(($elem, index) => {
            expect($elem.text()).contains(prices[index])
        });
        
    })

    it('should sort products (High - Low)', () => {
        
        loginPage.login('standard_user', 'secret_sauce') 

        cy.get('.product_sort_container').select('hilo')

        const prices = [29.99, 9.99, 15.99, 49.99, 7.99, 15.99]
        
        prices.sort(function(a, b) {
            return a - b;
        }); 

        prices.reverse()

        cy.get('.inventory_item_price').each(($elem, index) => {
            expect($elem.text()).contains(prices[index])
        });

    })
})