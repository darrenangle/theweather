import 'cypress-react-selector';

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
    cy.waitForReact();
    cy.react('SummarySun').contains('Chicago, IL, USA');
    cy.react('SummarySun').contains('38');
    cy.react('TodayDateTime').contains('Wednesday November 18 2020');
  });

  it('search a new location and view a response', () => {
    cy.waitForReact();
    cy.route(
      '**/default/LatLongFromGoogle**',
      'fixture:weatherLocation2.json'
    ).as('weatherResponse');
    cy.get('[data-testid=location-input]')
      .type('test')
      .trigger('blur')
      .should('have.value', 'test');
    cy.get('[data-testid=location-submit-button]').click();
    cy.react('SummarySun').contains('Seattle, WA, USA');
    cy.react('SummarySun').contains('45');
    cy.react('TodayDateTime').contains('Wednesday November 18 2020');
  });
});
