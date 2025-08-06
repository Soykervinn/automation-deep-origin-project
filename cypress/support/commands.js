/**
 * Gets the list of all products
 * @returns Cypress.Chainable<Cypress.Response>
 */
Cypress.Commands.add('getProductList', () => {
    cy.request({
      method: 'GET',
      url: '/products'
    });
  });

/**
 * Gets a product by its ID
 * @param {number} id - The ID of the product to get
 * @returns Cypress.Chainable<Cypress.Response>
 */
Cypress.Commands.add('getProductById', (id) => {
    cy.request({
      method: 'GET',
      url: `/products/${id}`,
    });
  });

/**
 * Searches products by query string
 * @param {string} query - The search term
 * @returns {Cypress.Chainable<Cypress.Response>}
 */
Cypress.Commands.add('searchProducts', (query) => {
  cy.request({
    method: 'GET',
    url: `/products/search?q=${query}`
  });
});

/**
 * Gets products with pagination and selected fields
 * @param {number} limit - Number of products to return
 * @param {number} skip - Number of products to skip
 * @param {string[]} select - Optional fields to include (e.g. ['title', 'price'])
 * @returns {Cypress.Chainable<Cypress.Response>}
 */
Cypress.Commands.add('getProductsPaginated', (limit, skip, select = []) => {
  const query = new URLSearchParams({
    limit,
    skip,
    select: select.join(','),
  });

  cy.request({
    method: 'GET',
    url: `/products?${query.toString()}`
  });
});

/**
 * Fetches products sorted by a given field and order
 * @param {string} sortBy - Field to sort by (e.g., "title")
 * @param {string} order - Order direction ("asc" or "desc")
 * @returns Cypress.Chainable<Cypress.Response>
 */
Cypress.Commands.add('getSortedProducts', (sortBy, order) => {
  return cy.request({
    method: 'GET',
    url: `/products?sortBy=${sortBy}&order=${order}`
  });
});

/**
 * Gets the list of all product categories
 * @returns Cypress.Chainable<Cypress.Response>
 */
Cypress.Commands.add('getProductCategories', () => {
  return cy.request({
    method: 'GET',
    url: '/products/categories'
  });
});

/**
 * Gets the raw category list (array of strings)
 * @returns Cypress.Chainable<Cypress.Response>
 */
Cypress.Commands.add('getRawCategoryList', () => {
  return cy.request({
    method: 'GET',
    url: '/products/category-list'
  });
});

/**
 * Adds a new product with provided data
 * @param {object} product - Product payload to send
 * @returns Cypress.Chainable<Cypress.Response>
 */
Cypress.Commands.add('addProduct', (product) => {
  return cy.request({
    method: 'POST',
    url: '/products/add',
    body: product,
    headers: {
      'Content-Type': 'application/json'
    }
  });
});

/**
 * Updates a product by ID
 * @param {number} id - Product ID
 * @param {object} updatedFields - Fields to update
 * @returns Cypress.Chainable<Cypress.Response>
 */
Cypress.Commands.add('updateProduct', (id, updatedFields) => {
  return cy.request({
    method: 'PUT',
    url: `/products/${id}`,
    body: updatedFields,
    headers: {
      'Content-Type': 'application/json'
    }
  });
});

/**
 * Deletes a product by ID
 * @param {number} id - Product ID
 * @returns Cypress.Chainable<Cypress.Response>
 */
Cypress.Commands.add('deleteProduct', (id) => {
  return cy.request({
    method: 'DELETE',
    url: `/products/${id}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
});


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