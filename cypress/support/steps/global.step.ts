import { AfterAll, BeforeAll } from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(()=>{
    cy.exec('npm run clear')
})

AfterAll(()=>{
    cy.exec('npm run report')
})