Feature: search Wikipedia

Scenario Outline: Successful search
    Given Enter search term '<searchTerm>'
    When Do search
    Then Different content is shown for the user

    Examples:
      | searchTerm |
      | Java    |
      | Brasil  |


Scenario Outline: Incorrect search with invalid term
    Given Enter search term '<searchTerm>'
    When Do search
    Then No results should be shown

    Examples:
      | searchTerm |
      | Javaaa    |
      | Brasilll  |