context('weather', () => {
  beforeEach(() => {
    // load example.json fixture file and store
    // in the test context object
    cy.server();
    cy.route(
      '**/default/LatLongFromGoogle**',
      'fixture:weatherLocation.json'
    ).as('weatherResponse');
  });
  it('loads a default location query', () => {
    cy.visit('/');
    cy.get('#SummarySun').contains('CHICAGO IL USA');
    cy.get('#SummarySun').contains('38');
    cy.get('#TodayDateTime').contains(
      'Wednesday November 18 2020'.toUpperCase()
    );
  });

  it('search a new location and view a response', () => {
    cy.route(
      '**/default/LatLongFromGoogle**',
      'fixture:weatherLocation2.json'
    ).as('weatherResponse');
    cy.get('[data-testid=location-input]')
      .type('test')
      .trigger('blur')
      .should('have.value', 'test');
    cy.get('[data-testid=location-submit-button]').click();
    cy.get('#SummarySun').contains('SEATTLE WA USA');
    cy.get('#SummarySun').contains('45');
    cy.get('#TodayDateTime').contains(
      'Wednesday November 18 2020'.toUpperCase()
    );
  });
});
