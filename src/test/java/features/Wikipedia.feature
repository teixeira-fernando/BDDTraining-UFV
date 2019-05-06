Feature: search Wikipedia

Scenario Outline:
    Given Enter search term '<searchTerm>'
    When Do search
    Then Multiple results are shown for '<result>'

    Examples:
      | searchTerm | result                |
      | mercury    | Mercury usually refers to: |
      | max        | Max may refer to:     |