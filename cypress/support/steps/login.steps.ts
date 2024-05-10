import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPO } from '../../pages/login.po';
import { HeaderPO } from '../../pages/header.po';

const loginPage = new LoginPO('.login_container')
const headerPage = new HeaderPO('.header_container')

Given(/^the user navigates to the login page$/, ()=>{
    cy.visit('/',{retryOnStatusCodeFailure: false})
})

Given(/^the login page has the title '(.+)'$/, (title:string)=>{
    cy.get('.login_logo').should('have.text', title)
})

Given(/^the login form has the field 'Username'$/, ()=>{
    loginPage.usernameField.placeholder.then((x)=>{
        expect(x.toString()).equals('Username')
    });
})

Given(/^the login form has the field 'Password'$/, ()=>{
    loginPage.passwordField.placeholder.then((x)=>{
        expect(x.toString()).equals('Password')
    });})

Given(/^a '(.+)' button is shown on the login page$/, (label)=>{
    loginPage.loginButton.label.then((x)=>{
        expect(x?.toString()).equals(label)
    })
    loginPage.loginButton.isClickable();
})

Given(/^the user types '(.+)' as Username$/, (name: string)=>{
    if (name.trim()!=''){
        loginPage.usernameField.typeInto(name.trim());
    }
})

Given(/^the user types '(.+)' as Password$/, (passwd: string)=>{
    if (passwd.trim()!=''){
        loginPage.passwordField.typeInto(passwd.trim());
    }
})

Given(/^the user clicks on Login button$/, (passwd: string)=>{
    loginPage.loginButton.click();
})

Given(/^the user is succesfully loged in$/, ()=>{
    headerPage.headerLabel.should('have.text','Swag Labs')
})

Given(/^the error message '(.+)' appears on the login page$/, (msg: string)=>{
    loginPage.errorElement.should('have.text',msg)
})

Given(/^the user clicks on the 'x' button of error message$/, (msg: string)=>{
    loginPage.closeErrorMessage();
})

Given(/^error message dissapears$/, (msg: string)=>{
    loginPage.errorElement.should('not.exist');
})