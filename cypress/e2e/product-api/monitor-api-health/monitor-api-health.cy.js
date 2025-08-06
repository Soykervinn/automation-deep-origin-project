import '../../../support/commands';

describe('🔍 API Health Monitoring', () => {
  it('GET /products', () => {
    cy.getProductList().then((res) => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.be.lessThan(5000);
    });
  });

  it('GET /products/1', () => {
    cy.getProductById(1).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.be.lessThan(5000);
    });
  });

  it('GET /products?limit=10&skip=10&select=title,price', () => {
    cy.getProductsPaginated(10, 10, ['title', 'price']).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.be.lessThan(5000);
    });
  });

  it('GET /products?sortBy=title&order=asc', () => {
    cy.getSortedProducts('title', 'asc').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.be.lessThan(5000);
    });
  });

  it('GET /products/categories', () => {
    cy.getProductCategories().then((res) => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.be.lessThan(5000);
    });
  });

  it('GET /products/category-list', () => {
    cy.getRawCategoryList().then((res) => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.be.lessThan(5000);
    });
  });

  it('POST /products/add', () => {
    const product = {
      title: 'Monitor Check Product',
      category: 'Monitor',
      price: 1.99,
      discountPercentage: 5,
      rating: 3,
      stock: 1
    };
    cy.addProduct(product).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.duration).to.be.lessThan(5000);
    });
  });

  it('PUT /products/1', () => {
    cy.updateProduct(1, { price: 1 }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.be.lessThan(5000);
    });
  });

  it('DELETE /products/9', () => {
    cy.deleteProduct(9).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.be.lessThan(5000);
    });
  });
});
