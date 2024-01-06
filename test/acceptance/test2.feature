Feature: Handle Invalid Routes
Scenario: Handle invalid routes
  Given url 'http://localhost:3000/invalidroute'
  When method GET
  Then status 404
