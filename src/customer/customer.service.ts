import { Injectable } from '@nestjs/common';
import {Customer} from "../models/customer";
import {CUSTOMERS} from "../mock/customers";

@Injectable()
export class CustomerService {
    private customers: Customer[];

    getAll(): Promise<Customer[]> {
        if (!this.customers) {
            return this.fetchAll();
        }

        return Promise.resolve(this.customers);
    }

    async findCustomerById(id: number): Promise<Customer> {
        const customers = await this.getAll();
        return Promise.resolve(customers.find(c => c.id === id));
    }

    private fetchAll(): Promise<Customer[]> {
        this.customers = CUSTOMERS;
        return Promise.resolve(this.customers);
    }
}
