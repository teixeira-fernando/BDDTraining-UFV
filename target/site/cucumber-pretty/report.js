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
  "name": "",
  "description": "",
  "id": "search-wikipedia;",
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
  "name": "Multiple results are shown for \u0027\u003cresult\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "search-wikipedia;;",
  "rows": [
    {
      "cells": [
        "searchTerm",
        "result"
      ],
      "line": 9,
      "id": "search-wikipedia;;;1"
    },
    {
      "cells": [
        "mercury",
        "Mercury may refer to:"
      ],
      "line": 10,
      "id": "search-wikipedia;;;2"
    },
    {
      "cells": [
        "max",
        "Max may refer to:"
      ],
      "line": 11,
      "id": "search-wikipedia;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13666130393,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-wikipedia;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Enter search term \u0027mercury\u0027",
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
  "name": "Multiple results are shown for \u0027Mercury may refer to:\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 19
    }
  ],
  "location": "WikipediaSteps.searchFor(String)"
});
formatter.result({
  "duration": 862613055,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSteps.clickSearchButton()"
});
formatter.result({
  "duration": 1122008640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercury may refer to:",
      "offset": 32
    }
  ],
  "location": "WikipediaSteps.assertSingleResult(String)"
});
formatter.result({
  "duration": 318227013,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat steps.WikipediaSteps.assertSingleResult(WikipediaSteps.java:53)\r\n\tat ✽.Then Multiple results are shown for \u0027Mercury may refer to:\u0027(Wikipedia.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 821234464,
  "status": "passed"
});
formatter.before({
  "duration": 13404026499,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search-wikipedia;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Enter search term \u0027max\u0027",
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
  "name": "Multiple results are shown for \u0027Max may refer to:\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "max",
      "offset": 19
    }
  ],
  "location": "WikipediaSteps.searchFor(String)"
});
formatter.result({
  "duration": 611138837,
  "status": "passed"
});
formatter.match({
  "location": "WikipediaSteps.clickSearchButton()"
});
formatter.result({
  "duration": 1540919508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Max may refer to:",
      "offset": 32
    }
  ],
  "location": "WikipediaSteps.assertSingleResult(String)"
});
formatter.result({
  "duration": 78366496,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat steps.WikipediaSteps.assertSingleResult(WikipediaSteps.java:53)\r\n\tat ✽.Then Multiple results are shown for \u0027Max may refer to:\u0027(Wikipedia.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1493082542,
  "status": "passed"
});
});