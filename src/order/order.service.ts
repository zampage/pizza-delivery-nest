import { Injectable } from '@nestjs/common';
import {Order} from "../models/order";
import {ORDERS} from "../mock/orders";
import {CreateOrderDTO} from "../dto/create-order-dto";

@Injectable()
export class OrderService {
    private orders: Order[];

    getAll(): Promise<Order[]> {
        if (this.orders) {
            return Promise.resolve(this.orders);
        }

        return this.fetchAll();
    }

    async findOrderById(id: number): Promise<Order> {
        const orders = await this.getAll();
        const order = orders.find(o => o.id === id);
        return Promise.resolve(order);
    }

    async addOrder(config: CreateOrderDTO): Promise<number> {
        const order = new Order();
        const orders = await this.getAll();
        order.id = orders[orders.length - 1].id + 1;
        this.orders.push(Object.assign(config, order));
        return Promise.resolve(order.id);
    }

    private fetchAll(): Promise<Order[]> {
        this.orders = ORDERS;
        return Promise.resolve(this.orders);
    }
}
