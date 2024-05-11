import { AfterAll } from "@badeball/cypress-cucumber-preprocessor";
AfterAll(()=>{
    cy.exec('npm run report')
})