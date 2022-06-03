class Category {
  constructor(category) {
    this.id = category.id ?? null
    this.name = category.name ?? ''
  }
}

export default {
  state() {
    return {
      categories: [],
    }
  },

  getters: {
    categories(state) {
      return state.categories
    },
  },

  mutations: {
    setCategories(state, payload) {
      state.categories = payload.map((category) => new Category(category))
    },
  },

  actions: {
    async getCategories({ commit }) {
      await this.$load(
        async () => {
          const response = await this.$api.product.getCategories()
          commit('setCategories', response?.data?.data?.rows ?? [])
        },
        (error) => {
          console.log(error)
        }
      )
    },
  },
}
