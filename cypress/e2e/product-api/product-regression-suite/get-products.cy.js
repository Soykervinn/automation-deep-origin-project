import '../../../support/commands';

import {
  validateProductStructure,
  validateProductImageUrls
} from '../../../../utils/validators/productValidator.js';

describe('GET /products - Product list endpoint', () => {
  it('should return 200 and a valid product list structure', () => {
    cy.getProductList().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('products');
      expect(response.body.products).to.be.an('array');
      expect(response.body.products.length).to.be.greaterThan(0);

      const product = response.body.products[0];
      validateProductStructure(product);
    });
  });

  it('each product should have a valid ID and price > 0', () => {
    cy.getProductList().then((res) => {
      res.body.products.forEach((product) => {
        expect(product.id).to.be.a('number');
        expect(product.price).to.be.greaterThan(0);
      });
    });
  });

  it('should include at least one product in category "beauty"', () => {
    cy.getProductList().then((res) => {
      const found = res.body.products.some(p => p.category === 'beauty');
      expect(found).to.be.true;
    });
  });

  it('should have valid image URLs for each product', () => {
    cy.getProductList().then((res) => {
      res.body.products.forEach((product) => {
        validateProductImageUrls(product);
      });
    });
  });

  it('should contain "total", "limit", and "skip" metadata in response', () => {
    cy.getProductList().then((res) => {
      expect(res.body).to.have.property('total');
      expect(res.body).to.have.property('limit');
      expect(res.body).to.have.property('skip');
    });
  });
});
