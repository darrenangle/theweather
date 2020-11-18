context('weather', () => {
  beforeEach(() => {
    // load example.json fixture file and store
    // in the test context object
  });
  it('visits the app', () => {
    cy.server();
    cy.route(
      '**/default/LatLongFromGoogle**',
      'fixture:weatherLocation.json'
    ).as('weatherResponse');
    cy.visit('/');
    
  });
});
