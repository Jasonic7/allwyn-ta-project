import { DataTable, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CheckoutPO } from "../../pages/checkout.po";
import { SummaryPO } from '../../pages/summary.po';
import { CompletePO } from "../../pages/complete.po";

const checkoutPage = new CheckoutPO('.checkout_info_container');
const suumaryPage = new SummaryPO('.checkout_summary_container');
const completePage = new CompletePO('.checkout_complete_container')

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
	suumaryPage.cartList().getAllItems().should('have.length',expectedItems.length)
    expectedItems.forEach((expProd)=>{
        suumaryPage.cartList().getItemByName(expProd.Items).name.then((x)=>{
            cy.log(x);
        })
        cy.wrap(suumaryPage.cartList().getItemByName(expProd.Items)).should('exist')
    })
})

Given(/^the item '(.+)' has price '(.+)' on Checkout page$/, (item:string,price:string)=>{
    suumaryPage.cartList().getItemByName(item).price.then((pr)=>{
        expect(pr.trim()).equal(price.trim())
	})
});

Given(/^the item '(.+)' has quantity '(.+)' on Checkout page$/, (item:string,quantity:string)=>{
    suumaryPage.cartList().getItemByName(item).quantity.then((pr)=>{
        expect(pr.trim()).equal(quantity.trim())
	})
});

Given(/^the item '(.+)' has the description '(.+)' on Checkout page$/, (item:string,description:string)=>{
	suumaryPage.cartList().getItemByName(item).description.then((dsc)=>{
        expect(dsc.trim()).equal(description.trim())
    })
}); 

Given(/^'(.+)' is '(.+)'$/, (info:string,value:string)=>{
	suumaryPage.summaryInfo.contains('div',info)
	suumaryPage.summaryInfo.contains('div',value)
}); 


Given(/^'(.+)' has '(.+)' and '(.+)'$/, (info:string,value1:string, value2:string)=>{
	suumaryPage.summaryInfo.contains('div',info)
	suumaryPage.summaryInfo.contains('div',value1)
    suumaryPage.summaryInfo.contains('div',value2)
}); 

Given(/^the 'Finish' button is shown on Summary page$/, ()=>{
	suumaryPage.finish.should('exist');
	suumaryPage.finish.should('be.enabled');
})

Given(/^the 'Cancel' button is shown on Summary page$/, ()=>{
	suumaryPage.cancel.should('exist');
	suumaryPage.cancel.should('be.enabled');
})

Given(/^the user clicks on 'Finish' button on Summary page$/, ()=>{
	suumaryPage.finish.click();
})

Given(/^the user clicks on 'Cancel' button on Summary page$/, ()=>{
	suumaryPage.cancel.click();
})

Given(/^the message '(.+)' '(.+)' is shown$/, (message1:string, message2:string)=>{

    completePage.completeHeader.then((msg)=>{
        expect(msg.trim()).equals(message1)
    });
    completePage.completeMessage.then((msg)=>{
        expect(msg.trim()).equals(message2)
    });
})

Given(/^the user clicks on 'Back Home' button$/, ()=>{
	completePage.backHome.click();
})