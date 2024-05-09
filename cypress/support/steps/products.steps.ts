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


Given(/^the user clicks on '(.+)' on products page$/, (product:string)=>{
    productsPage.getItemByName(product).selectProductViaName();
});

Given(/^the user clicks on image of '(.+)' on products page$/, (product:string)=>{
    productsPage.getItemByName(product).selectProductViaImage();
});

Given(/^the detailed information is shown for '(.+)' product$/, (product:string)=>{

})

Given(/^a 'Back to products' button is shown$/, (product:string)=>{

})

Given(/^the name of the product is '(.+)'$/, (product:string)=>{

})

Given(/^the price of the product is '(.+)'$/, (product:string)=>{

})

Given(/^the price of the product is '(.+)'$/, (product:string)=>{

})