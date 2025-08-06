import '../../../support/commands.js';

import {
    validateCategoryStructure
} from '../../../../utils/validators/productValidator.js';


describe('GET /products/categories - Product categories', () => {
    it('should return 200 and an array of categories', () => {
      cy.getProductCategories().then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
      });
    });
  
    it('each category should have slug, name and a valid url', () => {
      cy.getProductCategories().then((res) => {
        res.body.forEach(validateCategoryStructure);
      });
    });
  
    it('should respond in less than 3000ms', () => {
      cy.getProductCategories().then((res) => {
        expect(res.duration).to.be.lessThan(3000);
      });
    });
  });