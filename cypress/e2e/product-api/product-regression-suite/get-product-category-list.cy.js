import '../../../support/commands.js';

import {
    validateCategoryStringList
} from '../../../../utils/validators/productValidator.js';

describe('GET /products/category-list - Category slugs as array of strings', () => {
    it('should return 200 and an array of category slugs', () => {
      cy.getRawCategoryList().then((res) => {
        expect(res.status).to.eq(200);
        validateCategoryStringList(res.body);
      });
    });
  
    it('should contain at least 20 categories', () => {
      cy.getRawCategoryList().then((res) => {
        expect(res.body.length).to.be.at.least(20);
      });
    });
  
    it('should respond in less than 3000ms', () => {
      cy.getRawCategoryList().then((res) => {
        expect(res.duration).to.be.lessThan(3000);
      });
    });
  });