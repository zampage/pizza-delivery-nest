import {Injectable, NotFoundException} from '@nestjs/common';
import {Order} from "../models/order";
import {ORDERS} from "../mock/orders";
import {CreateOrderDTO} from "../dto/create-order-dto";
import {CustomerService} from "../customer/customer.service";

@Injectable()
export class OrderService {
    private orders: Order[];

    constructor(private cs: CustomerService) {}

    getAll(): Promise<Order[]> {
        if (this.orders) {
            return Promise.resolve(this.orders);
        }

        return this.fetchAll();
    }

    async findOrderById(id: number): Promise<Order> {
        const orders = await this.getAll();
        const order = orders.find(o => o.id === id);

        if (order) {
            return order;
        }

        throw new NotFoundException(`Order with id "${id}" was not found!`);
    }

    async addOrder(config: CreateOrderDTO): Promise<number> {
        let order = new Order();

        // get new id
        const orders = await this.getAll();
        order.id = orders[orders.length - 1].id + 1;
        order = Object.assign(order, config);

        // assign customer and push
        order = await this.mapOrderToCustomer(order);
        this.orders.push(order);

        // give back id
        return Promise.resolve(order.id);
    }

    async findOrdersByCustomerId(id: number): Promise<Order[]> {
        const orders = await this.getAll();
        return orders.filter(o => o.customer.id === id);
    }

    private async fetchAll(): Promise<Order[]> {
        this.orders = await Promise.all(ORDERS.map(o => this.mapOrderToCustomer(o)));
        return Promise.resolve(this.orders);
    }

    private async mapOrderToCustomer(order): Promise<Order> {
        order.customer = await this.cs.findCustomerById(order.customerId);
        delete order.customerId;
        return Promise.resolve(Object.assign(new Order(), order));
    }
}
