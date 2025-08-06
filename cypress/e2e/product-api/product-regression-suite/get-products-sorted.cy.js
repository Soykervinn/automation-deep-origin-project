import '../../../support/commands';

  describe('GET /products?sortBy=&order= - Sorted product list', () => {
    const sortBy = 'title';
    const order = 'asc';
  
    it('should return 200, object body with non-empty products array', () => {
      cy.getSortedProducts(sortBy, order).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('products');
        expect(res.body.products).to.be.an('array');
        expect(res.body.products.length).to.be.greaterThan(0);
      });
    });
  
    it('should respond in less than 3000ms', () => {
      cy.getSortedProducts(sortBy, order).then((res) => {
        expect(res.duration).to.be.lessThan(3000);
      });
    });
  });