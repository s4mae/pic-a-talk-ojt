// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickElement', (selector, index = null) => {
    const targetElement = index !== null ? cy.get(selector).eq(index) : cy.get(selector).first();
  
    targetElement.then(($el) => {
      if ($el.length) { // Check if the element exists
        cy.wrap($el)
          .should('be.visible')
          .and('not.be.disabled')
          .scrollIntoView()
          .click()
          .invoke('text').then($text => {
            return $text.trim();
          })
      } else {
        cy.log(`Element not found for selector: ${selector}`);
      }
    });
  });
  

Cypress.Commands.add('getElementText', (selector, index = null) => {
    const targetElement = index !== null ? cy.get(selector).eq(index) : cy.get(selector).first();
  
    targetElement.then(($el) => {
      if ($el.length) { // Check if the element exists
        cy.log(`Element text: ${$el.text()}`); // Log the text of the element
        return $el.text(); // Return the text of the element
      } else {
        cy.log(`Element not found for selector: ${selector}`);
        return null; // Return null if the element does not exist
      }
    });
});
  