Feature: Cart

Background:
    Given the user navigates to the login page
    And the user types 'standard_user' as Username
    And the user types 'secret_sauce' as Password
    And the user clicks on Login button
    And the user is succesfully loged in


Scenario: View items on cart
	Given the user clicks on 'Add to cart' for 'Sauce Labs Backpack' product
	And the user clicks on 'Add to cart' for 'Sauce Labs Fleece Jacket' product
	And the user clicks on 'Add to cart' for 'Test.allTheThings() T-Shirt (Red)' product
	When the user clicks on 'Cart' button
	Then the Cart page is shown
	And the 'Your Cart' label is shown
	# And the 'QTY' and 'Description' labels are show on Cart page
	And the Cart page contains the following items:
	| Items                             |
	| Sauce Labs Backpack               |
	| Sauce Labs Fleece Jacket          |
	| Test.allTheThings() T-Shirt (Red) |
	And the 'Continue Shopping' button is shown on Cart page
	And the 'Checkout' button is shown on Cart page
	And the item 'Sauce Labs Backpack' has quantity '1'
	And the item 'Sauce Labs Backpack' has price '$29.99'
	And the item 'Sauce Labs Backpack' has the description 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'



Scenario: Remove item from cart list
	Given the user clicks on 'Add to cart' for 'Sauce Labs Backpack' product
	And the user clicks on 'Add to cart' for 'Sauce Labs Fleece Jacket' product
	And the user clicks on 'Add to cart' for 'Test.allTheThings() T-Shirt (Red)' product
	And the user clicks on 'Cart' button
	And the Cart page is shown
	When the user clicks on 'Remove' for 'Sauce Labs Fleece Jacket' product on Cart page
	And the Cart page contains the following items:
	| Items                             |
	| Sauce Labs Backpack               |
	| Test.allTheThings() T-Shirt (Red) |


Scenario: Update(remove item) cart list
	Given the user clicks on 'Add to cart' for 'Sauce Labs Backpack' product
	And the user clicks on 'Add to cart' for 'Sauce Labs Fleece Jacket' product
	And the user clicks on 'Add to cart' for 'Test.allTheThings() T-Shirt (Red)' product
	And the user clicks on 'Cart' button
	And the Cart page is shown
	And the Cart page contains the following items:
	| Items                             |
	| Sauce Labs Backpack               |
	| Sauce Labs Fleece Jacket          |
	| Test.allTheThings() T-Shirt (Red) |
    When the user clicks on 'Continue Shopping' button on Cart page
	And the user views the Products page
	And the user clicks on 'Remove' for 'Sauce Labs Fleece Jacket' product
	And the user clicks on 'Cart' button
	And the Cart page contains the following items:
	| Items                             |
	| Sauce Labs Backpack               |
	| Test.allTheThings() T-Shirt (Red) |


Scenario: Update(add item) cart list
	Given the user clicks on 'Add to cart' for 'Sauce Labs Backpack' product
	And the user clicks on 'Add to cart' for 'Sauce Labs Fleece Jacket' product
	And the user clicks on 'Add to cart' for 'Test.allTheThings() T-Shirt (Red)' product
	And the user clicks on 'Cart' button
	And the Cart page is shown
	And the Cart page contains the following items:
	| Items                             |
	| Sauce Labs Backpack               |
	| Sauce Labs Fleece Jacket          |
	| Test.allTheThings() T-Shirt (Red) |
    When the user clicks on 'Continue Shopping' button on Cart page
	And the user views the Products page
	And the user clicks on 'Add to cart' for 'Sauce Labs Bolt T-Shirt' product
	And the user clicks on 'Cart' button
	And the Cart page contains the following items:
	| Items                             |
	| Sauce Labs Backpack               |
	| Sauce Labs Fleece Jacket          |
	| Test.allTheThings() T-Shirt (Red) |
	| Sauce Labs Bolt T-Shirt           |


Scenario: Update(remove item) cart list from product detail page
	Given the user clicks on 'Add to cart' for 'Sauce Labs Backpack' product
	And the user clicks on 'Add to cart' for 'Sauce Labs Fleece Jacket' product
	And the user clicks on 'Add to cart' for 'Test.allTheThings() T-Shirt (Red)' product
	And the user clicks on 'Cart' button
    And the user clicks on 'Sauce Labs Fleece Jacket' on Cart page
	And the user clicks on 'Remove' on product details page
	And the user clicks on 'Cart' button
	And the Cart page contains the following items:
	| Items                             |
	| Sauce Labs Backpack               |
	| Test.allTheThings() T-Shirt (Red) |


Scenario: Verify that cart retains added items when the user logs out and logs in 
	Given the user clicks on 'Add to cart' for 'Sauce Labs Backpack' product
	And the user clicks on 'Add to cart' for 'Sauce Labs Fleece Jacket' product
	And the user clicks on 'Add to cart' for 'Test.allTheThings() T-Shirt (Red)' product
	And the user opens side menu
	And the user clicks on 'Logout' from side menu
    And the user types 'standard_user' as Username
    And the user types 'secret_sauce' as Password
    And the user clicks on Login button
	And the cart has '3' items
	When the user clicks on 'Cart' button
	And the Cart page contains the following items:
	| Items                             |
	| Sauce Labs Backpack               |
	| Sauce Labs Fleece Jacket          |
	| Test.allTheThings() T-Shirt (Red) |


