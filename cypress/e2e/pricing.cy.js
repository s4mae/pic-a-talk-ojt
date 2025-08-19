describe('Pic-A-Talk - Pricing Page', () => {

  beforeEach(() => {
    cy.visit('https://pic-a-talk.com/pricing');
  });

  it('TC020 - Verify pricing plans visibility', () => {
    const planSelectors = [
    'div.et_pb_pricing_table_0', // Free
    'div.et_pb_pricing_table_1', // Monthly
    'div.et_pb_pricing_table_2'  // Yearly
  ];

  planSelectors.forEach((selector) => {
    cy.get(selector).should('be.visible');
  });
  });

  it('TC021 - Verify feature distribution in comparison table', () => {
    cy.get('div.et_pb_text_4> div.et_pb_text_inner h1 > span').scrollIntoView();

    cy.get('div.et_pb_code_0').should('be.visible');

  });

});