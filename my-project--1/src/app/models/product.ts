export class Product {
  id: Number;
  name: String;
  price: number;
  url: String;
  description: String;
  amount: number;

  constructor() {
    this.id = 1;
    this.name = '';
    this.url = '';
    this.price = 1;
    this.description = '';
    this.amount = 0;
  }
}
