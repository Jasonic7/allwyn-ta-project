import { DataTable, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CheckoutPO } from "../../pages/checkout.po";

const checkoutPage = new CheckoutPO('.checkout_info_container')

Given(/^the user information form has the field 'First Name'$/, ()=>{
    checkoutPage.firstName.placeholder.then((x)=>{
        expect(x.toString()).equals('First Name')
    });
});

Given(/^the user information form has the field 'Last Name'$/, ()=>{
    checkoutPage.lastName.placeholder.then((x)=>{
        expect(x.toString()).equals('Last Name')
    });
});

Given(/^the user information form has the field 'Zip\/Postal Code'$/, ()=>{
    checkoutPage.postalCode.placeholder.then((x)=>{
        expect(x.toString()).equals('Zip/Postal Code')
    });
});

Given(/^the user types '(.+)' as First Name$/, (value:string)=>{
	if (value.trim()!=''){
		checkoutPage.firstName.typeInto(value);
	}
});

Given(/^the user types '(.+)' as Last Name$/, (value:string)=>{
	if (value.trim()!=''){
		checkoutPage.lastName.typeInto(value);
	}
});

Given(/^the user types '(.+)' as Zip\/Postal Code$/, (value:string)=>{
	if (value.trim()!=''){
		checkoutPage.postalCode.typeInto(value);
	}
});

Given(/^the 'Continue' button is shown on Checkout page$/, ()=>{
	checkoutPage.continue.should('exist');
	checkoutPage.continue.should('be.enabled');
})

Given(/^the 'Cancel' button is shown on Checkout page$/, ()=>{
	checkoutPage.cancel.should('exist');
	checkoutPage.cancel.should('be.enabled');
})

Given(/^the user clicks on 'Continue' button on Checkout page$/, ()=>{
	checkoutPage.continue.click();
})

Given(/^the user clicks on 'Cancel' button on Checkout page$/, ()=>{
	checkoutPage.cancel.click();
})

Given(/^the error message '(.+)' appears on the Checkout page$/, (msg: string)=>{
    checkoutPage.errorElement.should('have.text',msg)
})

Given(/^the Checkout page contains the following items:$/, (data: DataTable)=>{
	const expectedItems = data.hashes();
	checkoutPage.cartList().getAllItems().should('have.length',expectedItems.length)
    expectedItems.forEach((expProd)=>{
        checkoutPage.cartList().getItemByName(expProd.Items).name.then((x)=>{
            cy.log(x);
        })
        cy.wrap(checkoutPage.cartList().getItemByName(expProd.Items)).should('exist')
    })
})

Given(/^the item '(.+)' has price '(.+)' on Checkout page$/, (item:string,price:string)=>{
    checkoutPage.cartList().getItemByName(item).price.then((pr)=>{
        expect(pr.trim()).equal(price.trim())
	})
});

Given(/^the item '(.+)' has quantity '(.+)' on Checkout page$/, (item:string,quantity:string)=>{
    checkoutPage.cartList().getItemByName(item).quantity.then((pr)=>{
        expect(pr.trim()).equal(quantity.trim())
	})
});

Given(/^the item '(.+)' has the description '(.+)' on Checkout page$/, (item:string,description:string)=>{
	checkoutPage.cartList().getItemByName(item).description.then((dsc)=>{
        expect(dsc.trim()).equal(description.trim())
    })
}); 

Given(/^the '(.+)' is '(.+)'$/, (info:string,value:string)=>{
	checkoutPage.summaryInfo.contains('div',info)
	checkoutPage.summaryInfo.contains('div',value)
}); 
