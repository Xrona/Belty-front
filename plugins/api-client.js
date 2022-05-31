import api from './api/index'

export default (context, inject) => {
  inject('api', api(context))
}
