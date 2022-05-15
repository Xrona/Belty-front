export default class FilterEnum {
  static Popular = {
    name: 'popular',
    label: 'Популярным',
  }

  static Discount = {
    name: 'discount',
    label: 'Скидке',
  }

  static list() {
    return [this.Popular, this.Discount]
  }
}
