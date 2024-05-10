Feature: Products page

Background:
    Given the user navigates to the login page
    And the user types 'standard_user' as Username
    And the user types 'secret_sauce' as Password
    And the user clicks on Login button
    And the user is succesfully loged in
    And the user views the Products page

Scenario: View all the products
    Then the following products are shown:
    | ProductName                       |
    | Sauce Labs Backpack               |
    | Sauce Labs Bike Light             |
    | Sauce Labs Bolt T-Shirt           |
    | Sauce Labs Fleece Jacket          |
    | Sauce Labs Onesie                 |
    | Test.allTheThings() T-Shirt (Red) |


Scenario: Verify that a product displays Name, Price and Description in Products page
    Then the product 'Sauce Labs Backpack' is shown on products page
    And the product 'Sauce Labs Backpack' has price '$29.99' on products page
    And the product 'Sauce Labs Backpack' has the description 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'


Scenario: View product details when clicking on product's name
    Given the user clicks on 'Sauce Labs Onesie' on products page
    And the detailed information is shown for 'Sauce Labs Onesie' product
    And a 'Back to products' button is shown
    And the name of the product is 'Sauce Labs Onesie' on product details page
    And the price of the product is '$7.99' on product details page
    And the 'Add to cart' button is shown on product details page


Scenario: View product details when clicking on product's image
    Given the user clicks on image of 'Sauce Labs Onesie' on products page
    And the detailed information is shown for 'Sauce Labs Onesie' product
    And a 'Back to products' button is shown
    And the name of the product is 'Sauce Labs Onesie' on product details page
    And the price of the product is '$7.99' on product details page
    And the 'Add to cart' button is shown on product details page


Scenario: Verify that user is redirected to Products page when clicking 'Back to products'
    Given the user clicks on 'Sauce Labs Onesie' on products page
    When the user clicks on 'Back to products' button
    Then the user views the Products page


Scenario: Add items to cart on products page
	When the user clicks on 'Add to cart' for 'Sauce Labs Backpack' product
	And the user clicks on 'Add to cart' for 'Sauce Labs Fleece Jacket' product
	And the 'Remove' button is shown for 'Sauce Labs Backpack' product 
	And the 'Remove' button is shown for 'Sauce Labs Fleece Jacket' product
	Then the cart has '2' items


Scenario: Remove item from cart on products page
	Given the user clicks on 'Add to cart' for 'Sauce Labs Backpack' product
	And the user clicks on 'Add to cart' for 'Sauce Labs Fleece Jacket' product
	And the cart has '2' items
	When the user clicks on 'Remove' for 'Sauce Labs Backpack' product
	And the cart has '1' items


Scenario: Add item to cart from product detail page
    Given the user clicks on 'Sauce Labs Onesie' on products page
	When the user clicks on 'Add to cart' on product details page
	Then the cart has '1' items


Scenario: Remove item from product detail page
	Given the user clicks on 'Sauce Labs Onesie' on products page
	And the user clicks on 'Add to cart' on product details page
	When the user clicks on 'Remove' on product details page
	Then the cart has no items


Scenario: Verify that Remove button is shown on products page when adding an item from product detail page
	Given the user clicks on 'Sauce Labs Onesie' on products page
	And the user clicks on 'Add to cart' on product details page
    When the user clicks on 'Back to products' button
	Then the 'Remove' button is shown for 'Sauce Labs Onesie' product 
	And the cart has '1' items


Scenario: Verify that Add to cart button is shown on products page when removing an item from product detail page
	Given the user clicks on 'Add to cart' for 'Sauce Labs Backpack' product
	And the user clicks on 'Sauce Labs Backpack' on products page
	And the 'Remove' button is shown on product details page
	And the user clicks on 'Remove' on product details page
	And the cart has no items
    When the user clicks on 'Back to products' button
	Then the 'Add to cart' button is shown on product details page


Scenario: Filter by name from Z to A
    Given the following products are shown:
    | ProductName                       |
    | Sauce Labs Backpack               |
    | Sauce Labs Bike Light             |
    | Sauce Labs Bolt T-Shirt           |
    | Sauce Labs Fleece Jacket          |
    | Sauce Labs Onesie                 |
    | Test.allTheThings() T-Shirt (Red) |
	When the user filters the products by 'Name (Z to A)'
	Then the following products are shown:
    | ProductName                       |
	| Test.allTheThings() T-Shirt (Red) |
    | Sauce Labs Onesie                 |
    | Sauce Labs Fleece Jacket          |
    | Sauce Labs Bolt T-Shirt           |
    | Sauce Labs Bike Light             |
    | Sauce Labs Backpack               |


Scenario: Filter by price Low to High
    Given the following products are shown:
    | ProductName                       |
    | Sauce Labs Backpack               |
    | Sauce Labs Bike Light             |
    | Sauce Labs Bolt T-Shirt           |
    | Sauce Labs Fleece Jacket          |
    | Sauce Labs Onesie                 |
    | Test.allTheThings() T-Shirt (Red) |
	When the user filters the products by 'Price (low to high)'
	Then the following products are shown:
    | ProductName                       |
    | Sauce Labs Onesie                 |
	| Sauce Labs Bike Light             |
    | Sauce Labs Bolt T-Shirt           |
	| Test.allTheThings() T-Shirt (Red) |
    | Sauce Labs Backpack               |
    | Sauce Labs Fleece Jacket          |


Scenario: Filter by price High to Low
    Given the following products are shown:
    | ProductName                       |
    | Sauce Labs Backpack               |
    | Sauce Labs Bike Light             |
    | Sauce Labs Bolt T-Shirt           |
    | Sauce Labs Fleece Jacket          |
    | Sauce Labs Onesie                 |
    | Test.allTheThings() T-Shirt (Red) |
	When the user filters the products by 'Price (high to low)'
	Then the following products are shown:
    | ProductName                       |
    | Sauce Labs Fleece Jacket          |
    | Sauce Labs Backpack               |
	| Test.allTheThings() T-Shirt (Red) |
    | Sauce Labs Bolt T-Shirt           |
	| Sauce Labs Bike Light             |
    | Sauce Labs Onesie                 |
