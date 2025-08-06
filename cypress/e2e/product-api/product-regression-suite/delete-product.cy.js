import '../../../support/commands';

import {
    validateDeletedProduct
} from '../../../../utils/validators/productValidator.js';

describe('DELETE /products/:id - Delete product', () => {
  const productId = 10;

  it('should return 200 and mark product as deleted', () => {
    cy.deleteProduct(productId).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('id', productId);
      validateDeletedProduct(res.body);
    });
  });

  it('should respond in less than 3000ms', () => {
    cy.deleteProduct(productId).then((res) => {
      expect(res.duration).to.be.lessThan(3000);
    });
  });
});
