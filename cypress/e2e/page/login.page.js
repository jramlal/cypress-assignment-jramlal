class loginPage{
    //selectors
    get username() { return ('#user-name')}
    get password() { return ('#password')}
    get loginBtn() { return ('#login-button')} 

    get loginAlertMsg() {return ('h3[data-test="error"]')}

    //methods
    login(username,password){
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.loginBtn).click()
    }
}

export default new loginPage()