import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { HeaderPO } from '../../pages/header.po';
const headerPage = new HeaderPO('.header_container')

Given(/^the '(.+)' label is shown$/, (heading: string)=>{
    headerPage.headerTitle.should('have.text',heading)
})

Given(/^a 'Back to products' button is shown$/, ()=>{
	headerPage.backToProducts.should('exist')
	headerPage.backToProducts.should('not.be.disabled')
})

Given(/^the 'Add to cart' button is shown on product details page$/, ()=>{
	headerPage.cart.should('exist')
	headerPage.cart.should('not.be.disabled')
})

Given(/^the user clicks on 'Back to products' button$/, ()=>{
	headerPage.backToProducts.should('not.be.disabled').click();
})

Given(/^the cart has '(.+)' items$/, (items: string)=>{
	headerPage.numberOfItems.should('have.text',items)
})

Given(/^the cart has no items$/, ()=>{
	headerPage.numberOfItems.should('not.exist')
}) 

Given(/^the user filters the products by '(.+)'$/, (option:string)=>{
	headerPage.filter(option)
})

Given(/^the user clicks on 'Cart' button$/, ()=>{
	headerPage.cart.click();
})

Given(/^the user opens side menu$/, ()=>{
	headerPage.openMenu.click();
})
