import { AfterAll, BeforeAll } from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(()=>{
    cy.exec('npm run clear',{failOnNonZeroExit:false})
})

AfterAll(()=>{
    cy.exec('npm run report',{failOnNonZeroExit:false})
})