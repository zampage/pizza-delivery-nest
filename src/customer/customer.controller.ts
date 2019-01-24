import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import {CustomerService} from "./customer.service";
import {Customer} from "../models/customer";
import {OrderService} from "../order/order.service";

@Controller('customer')
export class CustomerController {
    constructor(private cs: CustomerService, private os: OrderService) {}

    @Get()
    getAll(): Promise<Customer[]> {
        return this.cs.getAll();
    }

    @Get(':id')
    async getBill(@Param('id', new ParseIntPipe()) id: number): Promise<Customer> {
        const customer = await this.cs.findCustomerById(id);
        const orders = await this.os.findOrdersByCustomerId(customer.id);
        customer.bill = orders.reduce((total, order) => {
            total += order.items.reduce((amnt, item) => amnt += item.price, 0);
            return total;
        }, 0);
        return Promise.resolve(customer);
    }
}
