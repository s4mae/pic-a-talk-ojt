describe('Pic-A-Talk - About Page', () => {

  beforeEach(() => {
    cy.visit('https://pic-a-talk.com/about-us/');
  });

  it('TC018 - Verify Learn More button in "The Story of Pic-A-Talk"', () => {
    cy.contains('The Story of Pic-A-Talk').scrollIntoView();

    cy.get('div.et_pb_button_0_wrapper a').click();

    cy.url().should('not.include', '/about-us/');
  });

  it('TC019 - Verify LinkedIn buttons for each team member', () => {
  cy.contains('Our Team').scrollIntoView();

  const columns = [
    'div.et_pb_column_3',
    'div.et_pb_column_4',
    'div.et_pb_column_5',
    'div.et_pb_column_6',
    'div.et_pb_column_7'
  ];

  columns.forEach((col) => {
    // Wrap each column so Cypress handles it in order
    cy.get(col).within(() => {
      cy.get('h4')
        .invoke('text')
        .then((text) => {
          const firstName = text.trim().toLowerCase().split(' ')[0];

          cy.get('ul > li > a')
            .invoke('attr', 'href')
            .then((link) => {
              cy.log(`Checking ${firstName} -> ${link}`);
              expect(link.toLowerCase()).to.include(firstName);
            });
        });
    });
  });
});

});