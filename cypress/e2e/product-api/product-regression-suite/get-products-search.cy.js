import '../../../support/commands';

import {
  validateProductStructure,
  validateProductImageUrls,
  validateProductIdAndPrice
} from '../../../../utils/validators/productValidator.js';

describe('GET /products/search?q= - Search products by keyword', () => {
  const query = 'mascara';

  it('should return 200 and a list of matching products', () => {
    cy.searchProducts(query).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('products');
      expect(res.body.products).to.be.an('array');
      expect(res.body.products.length).to.be.greaterThan(0);
    });
  });

  it('should contain at least one product with the word in title or tags', () => {
    cy.searchProducts(query).then((res) => {
      const found = res.body.products.some((product) =>
        product.title.toLowerCase().includes(query) ||
        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(query)))
      );
      expect(found).to.be.true;
    });
  });

  it('each returned product should follow expected structure', () => {
    cy.searchProducts(query).then((res) => {
      res.body.products.forEach((product) => {
        validateProductStructure(product);
        validateProductImageUrls(product);
        validateProductIdAndPrice(product);
      });
    });
  });

  it('should include metadata fields in response', () => {
    cy.searchProducts(query).then((res) => {
      expect(res.body).to.have.property('total');
      expect(res.body).to.have.property('limit');
      expect(res.body).to.have.property('skip');
    });
  });
});