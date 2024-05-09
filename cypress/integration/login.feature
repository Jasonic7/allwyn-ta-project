Feature: Login page

Scenario: View login page
    Given the user navigates to the login page
    Then the login page has the title 'Swag Labs'
    And the login form has the field 'Username'
    And the login form has the field 'Password'
    And a 'Login' button is shown on the login page

Scenario: Verify successful user login
    Given the user navigates to the login page
    And the user types 'standard_user' as Username
    And the user types 'secret_sauce' as Password
    When the user clicks on Login button
    Then the user is succesfully loged in

Scenario Outline: Verify unsuccessful login of a user
    Given the user navigates to the login page
    And the user types <username> as Username
    And the user types <password> as Password
    When the user clicks on Login button
    Then the error message <message> appears on the login page

    Examples:
    | username                           | password                           | message                                                                     |
    | 'locked_out_user'                  | 'secret_sauce'                     | 'Epic sadface: Sorry, this user has been locked out.'                       |
    | 'unknown_user'                     | 'secret_sauce'                     | 'Epic sadface: Username and password do not match any user in this service' |
    | ' '                                | 'secret_sauce'                     | 'Epic sadface: Username is required'                                        |
    | 'standard_user'                    | 'secret_sauc'                      | 'Epic sadface: Username and password do not match any user in this service' |
    | 'standard_user'                    | ' '                                | 'Epic sadface: Password is required'                                        |
    | '<script>alert("test1");</script>' | 'secret_sauce'                     | 'Epic sadface: Username and password do not match any user in this service' |
    | 'standard_user'                    | '<script>alert("test1");</script>' | 'Epic sadface: Username and password do not match any user in this service' |

Scenario: Close error message on unsuccessful login
    Given the user navigates to the login page
    And the user types 'locked_out_user' as Username
    And the user types 'secret_sauce' as Password
    And the user clicks on Login button
    And the error message 'Epic sadface: Sorry, this user has been locked out.' appears on the login page
    When the user clicks on the 'x' button of error message
    Then error message dissapears
