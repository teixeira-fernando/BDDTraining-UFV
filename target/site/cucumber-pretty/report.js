$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Wikipedia.feature");
formatter.feature({
  "line": 1,
  "name": "search Wikipedia",
  "description": "",
  "id": "search-wikipedia",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful search",
  "description": "",
  "id": "search-wikipedia;successful-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Enter search term \u0027\u003csearchTerm\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Different content is shown for the user",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "search-wikipedia;successful-search;",
  "rows": [
    {
      "cells": [
        "searchTerm"
      ],
      "line": 9,
      "id": "search-wikipedia;successful-search;;1"
    },
    {
      "cells": [
        "Java"
      ],
      "line": 10,
      "id": "search-wikipedia;successful-search;;2"
    },
    {
      "cells": [
        "Brasil"
      ],
      "line": 11,
      "id": "search-wikipedia;successful-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3309929209,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Successful search",
  "description": "",
  "id": "search-wikipedia;successful-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Enter search term \u0027Java\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Different content is shown for the user",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 19
    }
  ],
  "location": "WikipediaSteps.searchFor(String)"
});
formatter.result({
  "duration": 245092804,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSteps.clickSearchButton()"
});
formatter.result({
  "duration": 1121701488,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSteps.assertSingleResult()"
});
formatter.result({
  "duration": 195054343,
  "status": "passed"
});
formatter.after({
  "duration": 80123047,
  "status": "passed"
});
formatter.before({
  "duration": 2184673607,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successful search",
  "description": "",
  "id": "search-wikipedia;successful-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Enter search term \u0027Brasil\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Different content is shown for the user",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Brasil",
      "offset": 19
    }
  ],
  "location": "WikipediaSteps.searchFor(String)"
});
formatter.result({
  "duration": 100052421,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSteps.clickSearchButton()"
});
formatter.result({
  "duration": 2430794061,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSteps.assertSingleResult()"
});
formatter.result({
  "duration": 29168961,
  "status": "passed"
});
formatter.after({
  "duration": 87753737,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Incorrect search with invalid term",
  "description": "",
  "id": "search-wikipedia;incorrect-search-with-invalid-term",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "Enter search term \u0027\u003csearchTerm\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "No results should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "search-wikipedia;incorrect-search-with-invalid-term;",
  "rows": [
    {
      "cells": [
        "searchTerm"
      ],
      "line": 20,
      "id": "search-wikipedia;incorrect-search-with-invalid-term;;1"
    },
    {
      "cells": [
        "Javaaa"
      ],
      "line": 21,
      "id": "search-wikipedia;incorrect-search-with-invalid-term;;2"
    },
    {
      "cells": [
        "Brasilll"
      ],
      "line": 22,
      "id": "search-wikipedia;incorrect-search-with-invalid-term;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2207664239,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Incorrect search with invalid term",
  "description": "",
  "id": "search-wikipedia;incorrect-search-with-invalid-term;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "Enter search term \u0027Javaaa\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "No results should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Javaaa",
      "offset": 19
    }
  ],
  "location": "WikipediaSteps.searchFor(String)"
});
formatter.result({
  "duration": 97342835,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSteps.clickSearchButton()"
});
formatter.result({
  "duration": 1365789371,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSteps.assertInvalidSearch()"
});
formatter.result({
  "duration": 123301017,
  "status": "passed"
});
formatter.after({
  "duration": 78345563,
  "status": "passed"
});
formatter.before({
  "duration": 2095623184,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Incorrect search with invalid term",
  "description": "",
  "id": "search-wikipedia;incorrect-search-with-invalid-term;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "Enter search term \u0027Brasilll\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "No results should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Brasilll",
      "offset": 19
    }
  ],
  "location": "WikipediaSteps.searchFor(String)"
});
formatter.result({
  "duration": 104437023,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSteps.clickSearchButton()"
});
formatter.result({
  "duration": 1405111033,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSteps.assertInvalidSearch()"
});
formatter.result({
  "duration": 72265196,
  "status": "passed"
});
formatter.after({
  "duration": 79042422,
  "status": "passed"
});
});