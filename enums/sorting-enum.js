export default class SortingEnum {
  static Updated = {
    name: 'updated',
    label: 'Обновлению',
  }

  static Price = {
    name: 'price',
    label: 'Цене',
  }

  static list() {
    return [this.Updated, this.Price]
  }
}
