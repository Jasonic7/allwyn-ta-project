Feature: Login page


Scenario: View login page
Given the user navigates to the login page
And the login page has the title 'Swag Labs'
And the login form contains the following:
| Login form |
| Username   |
| Password   |
And a 'Login' button is shown on the login page