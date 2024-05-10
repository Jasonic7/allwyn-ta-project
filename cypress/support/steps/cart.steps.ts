import { DataTable, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CartPO } from "../../pages/cart.po";

const cartPage = new CartPO('.cart_contents_container')

Given(/^the Cart page is shown$/, ()=>{
	cy.wrap(cartPage).should('exist');
})

Given(/^the Cart page contains the following items:$/, (data: DataTable)=>{
	const expectedProducts = data.hashes();

	cartPage.getAllItems().should('have.length',expectedProducts.length)
    expectedProducts.forEach((expProd)=>{
        cartPage.getItemByName(expProd.Items).name.then((x)=>{
            cy.log(x);
        })
        cy.wrap(cartPage.getItemByName(expProd.Items)).should('exist')
    })
})

Given(/^the user clicks on 'Remove' for '(.+)' product on Cart page$/, (productName: string)=>{
	cartPage.getItemByName(productName).removeButton.click();
})

Given(/^the 'Continue Shopping' button is shown on Cart page$/, ()=>{
	cartPage.continueShopping.should('exist');
	cartPage.continueShopping.should('be.enabled');
})

Given(/^the 'Checkout' button is shown on Cart page$/, ()=>{
	cartPage.checkout.should('exist');
	cartPage.checkout.should('be.enabled');
})

Given(/^the user clicks on 'Checkout' button on Cart page$/, ()=>{
	cartPage.checkout.click();
})

Given(/^the user clicks on 'Continue Shopping' button on Cart page$/, ()=>{
	cartPage.continueShopping.click();
})

Given(/^the user clicks on 'Checkout' button on Cart page$/, ()=>{
	cartPage.checkout.click();
})

Given(/^the user clicks on '(.+)' on Cart page$/, (product:string)=>{
    cartPage.getItemByName(product).selectItemOnCart();
});


Given(/^the item '(.+)' has price '(.+)'$/, (item:string,price:string)=>{
    cartPage.getItemByName(item).price.then((pr)=>{
        expect(pr.trim()).equal(price.trim())
    })});

Given(/^the item '(.+)' has the description '(.+)'$/, (item:string,description:string)=>{
	cartPage.getItemByName(item).description.then((dsc)=>{
        expect(dsc.trim()).equal(description.trim())
    })
}); 
