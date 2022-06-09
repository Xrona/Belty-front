import axios from 'axios'

const headers = {
  accept: 'application/json',
}

const instance = axios.create({
  baseURL: process.env.API_DOMAIN,
})

export default (context) => {
  return {
    getContext() {
      return context
    },

    prepareConfig(config) {
      if (!config) {
        config = {}
      }
      //
      // const token = context?.$auth?.strategy?.token?.get()
      //
      // if (token) {
      //   headers.Authorization = token
      // }

      return {
        ...config,
        headers,
      }
    },

    get(url, config) {
      config = this.prepareConfig(config)

      return instance.get(url, config)
    },

    post(url, data = undefined, config = undefined) {
      config = this.prepareConfig(config)

      return instance.post(url, data, config)
    },

    patch(url, data = undefined, config = undefined) {
      config = this.prepareConfig(config)

      return instance.patch(url, data, config)
    },
  }
}
