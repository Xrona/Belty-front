export default (instance) => {
  return {
    getProducts(payload) {
      return instance.get('/products', {
        params: payload,
      })
    },

    getProduct(id) {
      return instance.get(`/products/${id}`)
    },

    getCategories() {
      return instance.get('/categories')
    },
  }
}
