import { DataTable, Given } from '@badeball/cypress-cucumber-preprocessor';
import { HeaderPO } from '../../pages/header.po';
import { ProductsPO } from '../../pages/products.po';

const headerPage = new HeaderPO('.header_container')
const productsPage = new ProductsPO('.inventory_container')

Given(/^the user views the Products page$/, ()=>{
    headerPage.headerTitle.should('have.text','Products')
    cy.wrap(productsPage).should('exist')
})

Given(/^the following products are shown:$/, (data: DataTable)=>{
    const expectedProducts = data.hashes();
    expectedProducts.forEach((expProd)=>{
        productsPage.getItemByName(expProd.ProductName).name.then((x)=>{
            cy.log(x);
        })
        cy.wrap(productsPage.getItemByName(expProd.ProductName)).should('exist')
    })
})

Given(/^the product '(.+)' is shown on products page$/, (product:string)=>{
    cy.wrap(productsPage.getItemByName(product)).should('exist') ;
})

Given(/^the product '(.+)' has price '(.+)' on products page$/, (product:string, price:string)=>{
    productsPage.getItemByName(product).price.then((pr)=>{
        cy.log(pr.trim(),price.trim())
        expect(pr.trim()).equal(price.trim())
    })
})

Given(/^the product '(.+)' has the description '(.+)'$/, (product:string, description: string)=>{
    productsPage.getItemByName(product).description.then((dsc)=>{
        cy.log(dsc.trim(),description.trim())
        expect(dsc.trim()).equal(description.trim())
    })
})