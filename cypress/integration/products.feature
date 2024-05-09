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
    And the detailed information is shown for ' ' product
    And a 'Back to products' button is shown
    And the name of the product is ' ' on product details page
    And the price of the product is ' ' on product details page
    And a ' ' button is shown on product details page


# Scenario: View product details when clicking on product's image
#     Given the user clicks on image of 'Sauce Labs Onesie' on products page
#     And the detailed information is shown for ' ' product
#     And a 'Back to products' button is shown
#     And the name of the product is ' ' on product details page
#     And the price of the product is ' ' on product details page
#     And a ' ' button is shown on product details page
