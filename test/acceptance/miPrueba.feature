Feature: Testing Countries API

Background:
* url 'http://localhost:3000'

Scenario: Get top 5 countries by population density
  Given path '/miprimerapractica'
  When method get
  Then status 200
  And match response == [{ name: '#string', density: '#number' }, { name: '#string', density: '#number' }, { name: '#string', density: '#number' }, { name: '#string', density: '#number' }, { name: '#string', density: '#number' }]