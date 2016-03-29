const root = {
  path: '/',
  description: 'Root',
  routes: {
    products: {
      path: 'products',
      description: 'Products',
      routes: {
        product: {
          path: ':id',
          description: 'Product',
        },
      },
    },
    feedback: {
      path: 'feedback',
      description: 'Feedback',
    },
  },
};

export function productPath(id) {
  const path = root.routes.products.path + '/' + root.routes.products.routes.product.path;
  return path.replace(/:id/, id);
}

export default root;
