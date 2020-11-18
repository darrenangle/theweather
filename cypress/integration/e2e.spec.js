context('weather', () => {
  beforeEach(() => {
    // load example.json fixture file and store
    // in the test context object
  });
  it('visits the app', () => {
    cy.server();
    cy.route(
      'https://42dnorruxh.execute-api.us-east-1.amazonaws.com/default/**/**',
      'fixture:weatherLocation.json'
    ).as('weatherResponse');
    cy.visit('/');
  });
});
