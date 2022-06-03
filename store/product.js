import _ from 'lodash'
import SortCaseEnum from '~/enums/sort-case-enum'

class Product {
  constructor(product) {
    this.id = product.id ?? null
    this.name = product.name ?? ''
    this.article = product.article ?? ''
    this.oldPrice = product.old_price ?? null
    this.price = product.price ?? ''
    this.discount = product.discount ?? null
    this.bestseller = product.bestseller ?? null
    this.image = {
      id: product?.image?.id ?? null,
      url: product?.image?.url ?? null,
      queue: product?.image.queue ?? 0,
    }
  }
}

export default {
  state() {
    return {
      products: [],
      currentCategory: null,
      search: null,
      sortingDate: null,
      sortingPrice: null,
      onlyDiscount: false,
      onlyBestseller: false,
    }
  },

  getters: {
    products(state) {
      return state.products
    },

    currentCategory(state) {
      return state.currentCategory
    },

    searchString(state) {
      return _.unescape(state.search)
    },

    sortingByDate(state) {
      return state.sortingDate
    },

    sortingByPrice(state) {
      return state.sortingPrice
    },

    onlyDiscount(state) {
      return state.onlyDiscount
    },

    onlyBestseller(state) {
      return state.onlyBestseller
    },
  },

  mutations: {
    setProducts(state, payload) {
      state.products = payload.map((product) => {
        return new Product(product)
      })
    },

    selectCategory(state, id) {
      state.currentCategory = id
    },

    setSearch(state, payload) {
      state.search = _.escape(payload)
    },

    setSortingByDate(state) {
      state.sortingPrice = null

      if (state.sortingDate === SortCaseEnum.ASC) {
        state.sortingDate = SortCaseEnum.DESC
      } else {
        state.sortingDate = SortCaseEnum.ASC
      }
    },

    setSortingByPrice(state) {
      state.sortingDate = null

      if (state.sortingPrice === SortCaseEnum.ASC) {
        state.sortingPrice = SortCaseEnum.DESC
      } else {
        state.sortingPrice = SortCaseEnum.ASC
      }
    },

    clearSorting(state) {
      state.sortingDate = null
      state.sortingPrice = null
    },

    setOnlyDiscount(state, payload) {
      state.onlyDiscount = payload
    },

    setOnlyBestseller(state, payload) {
      state.onlyBestseller = payload
    },
  },

  actions: {
    async getProducts({ commit, state }) {
      const payload = {
        category: state.currentCategory ?? undefined,
        search: state.search ?? undefined,
        sorting_date: state.sortingDate ?? undefined,
        sorting_price: state.sortingPrice ?? undefined,
        only_discount: state.onlyDiscount ? 1 : undefined,
        only_bestseller: state.onlyBestseller ? 1 : undefined,
      }

      await this.$load(
        async () => {
          const response = await this.$api.product.getProducts(payload)

          commit('setProducts', response.data?.data?.rows ?? [])
        },
        (error) => {
          console.log(error)
        }
      )
    },
  },
}
