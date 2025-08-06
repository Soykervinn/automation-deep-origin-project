import '../../../support/commands';

import {
    validateUpdatedProduct
} from '../../../../utils/validators/productValidator.js';

describe('PUT /products/:id - Update product', () => {
  const productId = 1;
  const updates = {
    price: 10.5,
    stock: 20
  };

  it('should return 200 and update product fields', () => {
    cy.updateProduct(productId, updates).then((res) => {
      expect(res.status).to.eq(200);
      validateUpdatedProduct(res.body, updates);
    });
  });

  it('should respond in less than 3000ms', () => {
    cy.updateProduct(productId, updates).then((res) => {
      expect(res.duration).to.be.lessThan(3000);
    });
  });
});
