/* global cy */

describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})

describe('Pokemon navigation', () => {
  it('can navigate from main page to Ivysaur page and see chlorophyll ability', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll').should('exist')
  })
})