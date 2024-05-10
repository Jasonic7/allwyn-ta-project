import { DataTable, Given } from '@badeball/cypress-cucumber-preprocessor';
import { HeaderPO } from '../../pages/header.po';
import { ProductsPO } from '../../pages/products.po';
import { ProductDetailPO } from '../../pages/productDetail.po';

const headerPage = new HeaderPO('.header_container')
const productsPage = new ProductsPO('.inventory_container')
const productsDetailPage = new ProductDetailPO('.inventory_details_container')

Given(/^the user views the Products page$/, ()=>{
    headerPage.headerTitle.should('have.text','Products')
    cy.wrap(productsPage).should('exist')
})

Given(/^the following products are shown:$/, (data: DataTable)=>{
    const expectedProducts = data.hashes();
	productsPage.getAllItems().should('have.length',expectedProducts.length)
    expectedProducts.forEach((expProd)=>{
        cy.wrap(productsPage.getItemByName(expProd.ProductName)).should('exist')
    })
})

Given(/^the product '(.+)' is shown on products page$/, (product:string)=>{
    cy.wrap(productsPage.getItemByName(product)).should('exist') ;
})

Given(/^the product '(.+)' has price '(.+)' on products page$/, (product:string, price:string)=>{
    productsPage.getItemByName(product).price.then((pr)=>{
        expect(pr.trim()).equal(price.trim())
    })
})

Given(/^the product '(.+)' has the description '(.+)'$/, (product:string, description: string)=>{
    productsPage.getItemByName(product).description.then((dsc)=>{
        expect(dsc.trim()).equal(description.trim())
    })
})


Given(/^the user clicks on '(.+)' on products page$/, (product:string)=>{
    productsPage.getItemByName(product).selectProductViaName();
});

Given(/^the user clicks on image of '(.+)' on products page$/, (product:string)=>{
    productsPage.getItemByName(product).selectProductViaImage();
});

Given(/^the detailed information is shown for '.+' product$/, ()=>{
	cy.wrap(productsDetailPage).should('exist')
})

Given(/^the name of the product is '(.+)' on product details page$/, (productName:string)=>{
	productsDetailPage.name.then((_name)=>{
		expect(_name.trim()).equal(productName.trim());
	})
})

Given(/^the price of the product is '(.+)' on product details page$/, (productPrice:string)=>{
	productsDetailPage.price.then((_price)=>{
		expect(_price.trim()).equal(productPrice.trim());
	})
})

Given(/^the user clicks on 'Add to cart' for '(.+)' product$/, (productName: string)=>{
	productsPage.getItemByName(productName).addToCartButton.click()
})

Given(/^the user clicks on 'Remove' for '(.+)' product$/, (productName: string)=>{
	productsPage.getItemByName(productName).removeButton.click()
})

Given(/^the 'Remove' button is shown for '(.+)' product$/, (productName: string)=>{
	productsPage.getItemByName(productName).removeButton
})

Given(/^the 'Remove' button is shown on product details page$/, (productName: string)=>{
	productsDetailPage.removeButton.should('be.visible')
})

Given(/^the user clicks on 'Add to cart' on product details page$/, ()=>{
	productsDetailPage.addToCartButton().click();
})

Given(/^the user clicks on 'Remove' on product details page$/, ()=>{
	productsDetailPage.removeButton.click();
})
