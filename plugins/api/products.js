export default (instance) => {
  return {
    getProducts(payload) {
      return instance.get('/products', {
        params: payload,
      })
    },

    getProduct() {
      return instance.get(`/products/${1}`)
    },

    getCategories() {
      return instance.get('/categories')
    },
  }
}
