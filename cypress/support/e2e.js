// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Put as an ENV variable

const authToken = Cypress.env('authToken');
beforeEach(() => {
    cy.intercept("*", (req) => {
        //Disable convert experiments
        const url = new URL(req.url, window.location.origin);
        
        if (!url.searchParams.has('convert_optout')) {
            url.searchParams.append('convert_optout', '1');
        }
        req.url = url.toString();
        req.headers["cypress-auth"] = authToken;
    }).as("allRequests");
    cy.visit('')
})

afterEach(function onAfterEach() {
    if (this.currentTest.state === 'failed') {
      cy.setCookie('shouldSkip', 'true');
      //set cookie to skip tests for further specs
      Cypress.runner.stop();
      //this will skip tests only for current spec
    }
  });