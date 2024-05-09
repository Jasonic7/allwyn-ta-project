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


Scenario: Verify that a product contains Name, Price and Description
    Then the product 'Sauce Labs Backpack' is shown on products page
    And the product 'Sauce Labs Backpack' has price '$29.99' on products page
    And the product 'Sauce Labs Backpack' has the description 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
