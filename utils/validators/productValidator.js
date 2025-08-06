/**
 * Validates the structure of a product object
 * @param {object} product - The product object to validate
 */
export const validateProductStructure = (product) => {
    expect(product).to.include.all.keys(
      'id',
      'title',
      'description',
      'category',
      'price',
      'discountPercentage',
      'rating',
      'stock',
      'tags',
      'brand',
      'sku',
      'weight',
      'dimensions',
      'warrantyInformation',
      'shippingInformation',
      'availabilityStatus',
      'reviews',
      'returnPolicy',
      'minimumOrderQuantity',
      'meta',
      'images',
      'thumbnail'
    );
  
    expect(product.title).to.be.a('string');
    expect(product.price).to.be.a('number');
    expect(product.reviews).to.be.an('array');
    expect(product.dimensions).to.have.all.keys('width', 'height', 'depth');
    expect(product.meta).to.have.keys('createdAt', 'updatedAt', 'barcode', 'qrCode');
  };
  
  /**
   * Validates that image and thumbnail URLs are in expected format
   * @param {object} product - The product object
   */
  export const validateProductImageUrls = (product) => {
    expect(product.images[0]).to.match(/^https:\/\/cdn\.dummyjson\.com\/.+\.webp$/);
    expect(product.thumbnail).to.match(/^https:\/\/cdn\.dummyjson\.com\/.+\.webp$/);
  };
  
  /**
 * Validates that the product has a valid ID and a price greater than 0
 * @param {object} product - The product object
 */
export const validateProductIdAndPrice = (product) => {
    expect(product.id).to.be.a('number');
    expect(product.id).to.be.greaterThan(0);
    expect(product.price).to.be.a('number');
    expect(product.price).to.be.greaterThan(0);
  };

/**
 * Validates standard pagination fields in a response
 * @param {object} body - The response body
 * @param {number} expectedLimit - Expected limit
 * @param {number} expectedSkip - Expected skip
 */
export const validatePaginationMetadata = (body, expectedLimit, expectedSkip) => {
  expect(body).to.have.property('total').and.to.be.a('number');
  expect(body).to.have.property('limit').and.to.equal(expectedLimit);
  expect(body).to.have.property('skip').and.to.equal(expectedSkip);
};

/**
 * Validates that an array of strings is sorted in ascending order (case-insensitive)
 * @param {string[]} arr - Array of strings to validate
 */
export const validateSortedArrayAsc = (arr) => {
  const normalized = arr.map((s) => s.trim().toLowerCase());
  const sorted = [...normalized].sort((a, b) => a.localeCompare(b));
  expect(normalized).to.deep.equal(sorted);
};

/**
 * Validates the structure of a product category object
 * @param {object} category - The category object to validate
 */
export const validateCategoryStructure = (category) => {
  expect(category).to.have.all.keys('slug', 'name', 'url');
  expect(category.slug).to.be.a('string');
  expect(category.name).to.be.a('string');
  expect(category.url).to.match(/^https:\/\/dummyjson\.com\/products\/category\/[a-z0-9-]+$/);
};

/**
 * Validates that the category list is an array of non-empty strings
 * @param {string[]} categoryList - Array of category strings
 */
export const validateCategoryStringList = (categoryList) => {
  expect(categoryList).to.be.an('array');
  expect(categoryList.length).to.be.greaterThan(0);
  categoryList.forEach((category) => {
    expect(category).to.be.a('string');
    expect(category.trim()).to.not.be.empty;
  });
};

/**
 * Validates that the added product response contains the expected fields
 * @param {object} responseBody
 * @param {object} expectedData
 */
export const validateAddedProduct = (responseBody, expectedData) => {
  expect(responseBody).to.include(expectedData);
  expect(responseBody).to.have.property('id');
  expect(responseBody.id).to.be.a('number');
};

/**
 * Validates that the updated product response contains updated values
 * @param {object} responseBody
 * @param {object} expectedUpdates
 */
export const validateUpdatedProduct = (responseBody, expectedUpdates) => {
  Object.entries(expectedUpdates).forEach(([key, value]) => {
    expect(responseBody).to.have.property(key, value);
  });
  expect(responseBody).to.have.property('id');
};

/**
 * Validates that a product has been soft-deleted
 * @param {object} deletedProduct - The deleted product object
 */
export const validateDeletedProduct = (deletedProduct) => {
  expect(deletedProduct).to.have.property('isDeleted', true);
  expect(deletedProduct).to.have.property('deletedOn');
  expect(new Date(deletedProduct.deletedOn)).to.be.a('date');
};
