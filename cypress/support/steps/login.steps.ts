import { DataTable, Given } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPO } from '../../pages/login.po';

const loginPage = new LoginPO('.login_container')

Given(/^the user navigates to the login page$/, ()=>{
    cy.visit('/');
})

Given(/^the login page has the title '(.+)'$/, (title:string)=>{
    loginPage.title.should('have.value', title);
})

Given(/^the login form contains the following:$/, (table: DataTable)=>{
    const rows =  table.hashes();
    expect(rows[0][0].toString()).equal(loginPage.usernameField.placeholder);
    expect(rows[0][1].toString()).equal(loginPage.passwordField.placeholder);   
})

Given(/^a '(.+)' button is shown on the login page$/, (label)=>{
    loginPage.loginButton.label.should('have.value',label);
    loginPage.loginButton.isClickable();
})

