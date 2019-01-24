import {Injectable, NotFoundException} from '@nestjs/common';
import {Customer} from "../models/customer";
import {CUSTOMERS} from "../mock/customers";

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];

    getAll(): Promise<Customer[]> {
        if (this.customers.length > 0) {
            return Promise.resolve(this.customers);
        }

        return this.fetchAll();
    }

    async findCustomerById(id: number): Promise<Customer> {
        const customers = await this.getAll();
        const customer = customers.find(c => c.id === id);

        if (customer) {
            return Promise.resolve(customer);
        }

        throw new NotFoundException(`Customer with ID "${id}" was not found!`);
    }

    private fetchAll(): Promise<Customer[]> {
        this.customers = CUSTOMERS.map(c => Object.assign(new Customer(), c));
        return Promise.resolve(this.customers);
    }
}
