import { Controller, Get } from '@nestjs/common';
import {OrderService} from "./order/order.service";

@Controller()
export class AppController {
  constructor(private os: OrderService) {}

  @Get()
  async getHome(): Promise<string> {
    let output = '';
    const orders = await this.os.getAll();

    output += 'Currently there are the following orders placed:<br>';
    output += '<ul>';
    orders.forEach(order => {
      const customer = order.customer;
      const itemList = order.items.map(item => `1x ${item.name}`).join(',');
      const bill = order.items.reduce((total, item) => total += item.price, 0).toFixed(2);

      output += '<li>';
      output += `${itemList} totaling to: $${bill} placed by: ${customer.firstname} ${customer.lastname}`;
      output += '</li>';
    });
    output += '</ul>';

    return Promise.resolve(output);

  }
}
