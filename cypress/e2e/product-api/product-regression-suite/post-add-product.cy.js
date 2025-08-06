import '../../../support/commands';

import {
    validateAddedProduct
} from '../../../../utils/validators/productValidator.js';

describe('POST /products/add - Add new product', () => {
    const productPayload = {
      title: "Ker Charger",
      description: "Charger for good vibes",
      category: "Vibes",
      price: 6.66,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5
    };
  
    it('should return 201 and echo back the product data with ID', () => {
      cy.addProduct(productPayload).then((res) => {
        expect(res.status).to.eq(201);
        validateAddedProduct(res.body, productPayload);
      });
    });
  
    it('should respond in less than 3000ms', () => {
      cy.addProduct(productPayload).then((res) => {
        expect(res.duration).to.be.lessThan(3000);
      });
    });
  });