import '../../../support/commands';

import {
  validateProductStructure,
  validateProductImageUrls
} from '../../../../utils/validators/productValidator.js';

describe('GET /products/:id - Get single product', () => {
  const productId = 1;

  it('should return valid structure for the product', () => {
    cy.getProductById(productId).then((response) => {
      const product = response.body;
      validateProductStructure(product);
    });
  });

  it('should have valid image and thumbnail URLs', () => {
    cy.getProductById(productId).then((response) => {
      const product = response.body;
      validateProductImageUrls(product);
    });
  });
});

  