Feature: Side menu

Background:
    Given the user navigates to the login page
    And the user types 'standard_user' as Username
    And the user types 'secret_sauce' as Password
    And the user clicks on Login button
    And the user is succesfully loged in

Scenario: View side menu options
	When the user opens side menu
	Then the following options are shown:
	| Options         |
	| All Items       |
	| About           |
	| Logout          |
	| Reset App State |

Scenario: View all items
    Given the user clicks on 'Sauce Labs Onesie' on products page
	And the user opens side menu
	When the user clicks on 'All Items' from side menu
	Then the user views the Products page


Scenario: View About
	And the user opens side menu
	When the user clicks on 'About' from side menu
	Then the user is redirected to SauceLabs page

Scenario: Logout user
	And the user opens side menu
	When the user clicks on 'Logout' from side menu
	Then the user is redirected to Login page
	
