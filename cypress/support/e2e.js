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


beforeEach(() =>{
    cy.visit('https://socialboosting.com?convert_optout=1')
})


/*
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
    // Separate chaining for cy.visit and cy.wait
    cy.visit('')//, { timeout: 60000, retryOnNetworkFailure: true, retryOnStatusCodeFailure: true });

    cy.wait("@allRequests").then((interceptions) => {
        // Ensure interceptions is an array and then iterate
        if (Array.isArray(interceptions)) {
            interceptions.forEach((interception) => {
                cy.log(`Intercepting request: ${interception.request.method} ${interception.request.url}`);
            });
        
            const lastRequestEndTime = interceptions[interceptions.length - 1].response.timestamp;
            const firstRequestStartTime = interceptions[0].request.timestamp;
            const totalRequestTime = lastRequestEndTime - firstRequestStartTime;
            cy.log(`Total time for all requests: ${totalRequestTime} ms`);
        } else {
            cy.log("No interceptions found."); // Handle the case where no requests were intercepted
        }
    });;

})

*/



/*
afterEach(function onAfterEach() {
    if (this.currentTest.state === 'failed') {
      cy.setCookie('shouldSkip', 'true');
      //set cookie to skip tests for further specs
      Cypress.runner.stop();
      //this will skip tests only for current spec
    }
  });
*/
