Feature: Checkout page

Background:
    Given the user navigates to the login page
    And the user types 'standard_user' as Username
    And the user types 'secret_sauce' as Password
    And the user clicks on Login button
    And the user is succesfully loged in
	And the user clicks on 'Add to cart' for 'Sauce Labs Backpack' product
	And the user clicks on 'Add to cart' for 'Sauce Labs Fleece Jacket' product
	And the user clicks on 'Add to cart' for 'Test.allTheThings() T-Shirt (Red)' product
	And the user clicks on 'Cart' button


Scenario: View checkout page
	When the user clicks on 'Checkout' button on Cart page
	Then the 'Checkout: Your Information' label is shown
	And the user information form has the field 'First Name'
	And the user information form has the field 'Last Name'
	And the user information form has the field 'Zip/Postal Code'
	And the 'Continue' button is shown on Checkout page
	And the 'Cancel' button is shown on Checkout page


Scenario: Fill user information and proceed on second step
	When the user clicks on 'Checkout' button on Cart page
	And the user types 'Matt' as First Name
	And the user types 'Smith' as Last Name
	And the user types '125-24' as Zip/Postal Code
	And the user clicks on 'Continue' button on Checkout page
	Then the 'Checkout: Overview' label is shown


Scenario: Fill user information and verify error message
	Given the user clicks on 'Checkout' button on Cart page
	And the user types <firstname> as First Name
	And the user types <lastname> as Last Name
	And the user types <postal> as Zip/Postal Code
	When the user clicks on 'Continue' button on Checkout page
	Then the error message <message> appears on the Checkout page

	Examples:
	| firstname| lastname | postal   | message                          |
	| ' '      | 'Smith'  | '123-00' | 'Error: First Name is required'  |
	| 'Matt'   | ' '      | '125 00' | 'Error: Last Name is required'   |
	| 'Matt'   | 'Smith'  | ' '      | 'Error: Postal Code is required' |


Scenario: Fill user information with special characters
	Given the user clicks on 'Checkout' button on Cart page
	And the user types '~!@##$' as First Name
	And the user types '%^*&()' as Last Name
	And the user types 'Ιάσονας' as Zip/Postal Code
	When the user clicks on 'Continue' button on Checkout page
	Then the 'Checkout: Overview' label is shown


Scenario: Checkout page - second step - view items
	Given the user clicks on 'Checkout' button on Cart page
	And the 'Checkout: Your Information' label is shown
	And the user types 'Matt' as First Name
	And the user types 'Smith' as Last Name
	And the user types '125-24' as Zip/Postal Code
	When the user clicks on 'Continue' button on Checkout page
	And the 'Checkout: Overview' label is shown
	And the Checkout page contains the following items:
	| Items                             |
	| Sauce Labs Backpack               |
	| Sauce Labs Fleece Jacket          |
	| Test.allTheThings() T-Shirt (Red) |
	And the item 'Sauce Labs Backpack' has quantity '1' on Checkout page
	And the item 'Sauce Labs Backpack' has price '$29.99' on Checkout page
	And the item 'Sauce Labs Backpack' has the description 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.' on Checkout page
	

Scenario: Checkout page - second step - view summary info
	Given the user clicks on 'Checkout' button on Cart page
	And the 'Checkout: Your Information' label is shown
	And the user types 'Matt' as First Name
	And the user types 'Smith' as Last Name
	And the user types '125-24' as Zip/Postal Code
	When the user clicks on 'Continue' button on Checkout page
	And the 'Checkout: Overview' label is shown
	Then the 'Payment Information:' is 'SauceCard #31337'
	And the 'Shipping Information:' is 'Free Pony Express Delivery!'
	And the 'Price Total' is 'Item total: $95.97'
	And the 'Price Total' is 'Tax: $7.68'
	And the 'Total' is '$103.65'
