import '../../../support/commands.js';

import {
    validateProductIdAndPrice,
    validatePaginationMetadata
} from '../../../../utils/validators/productValidator.js';

describe('GET /products?limit=&skip=&select= - Paginated product list', () => {
    const limit = 10;
    const skip = 10;
    const selectFields = ['title', 'price'];
  
    it('should return 200 and correct number of products', () => {
      cy.getProductsPaginated(limit, skip, selectFields).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.products).to.have.length(limit);
      });
    });
  
    it('should return products with only selected fields', () => {
      cy.getProductsPaginated(limit, skip, selectFields).then((res) => {
        res.body.products.forEach((product) => {
          expect(product).to.have.all.keys('id', 'title', 'price');
        });
      });
    });
  
    it('should return valid pagination metadata', () => {
      cy.getProductsPaginated(limit, skip, selectFields).then((res) => {
        validatePaginationMetadata(res.body, limit, skip);
      });
    });
  
    it('should return products with valid id and price', () => {
      cy.getProductsPaginated(limit, skip, selectFields).then((res) => {
        res.body.products.forEach(validateProductIdAndPrice);
      });
    });
  });