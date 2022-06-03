import productsModule from './products'
import instance from './instance'

export default (context) => {
  return {
    product: productsModule(instance(context)),
  }
}
