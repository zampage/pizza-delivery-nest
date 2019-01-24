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
    async getBill(@Param('id', new ParseIntPipe()) id: number): Promise<string> {
        const c = await this.cs.findCustomerById(id);
        const o = await this.os.findOrdersByCustomerId(c.id);
        const bill = o.reduce((total, order) => {
            total += order.items.reduce((amnt, item) => amnt += item.price, 0);
            return total;
        }, 0);
        return `Customer ${c.firstname} ${c.lastname} has an open bill of: ${bill}`;
    }
}
