import { Injectable } from '@nestjs/common';
import {Order} from "../models/order";
import {ORDERS} from "../mock/orders";

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

    private fetchAll(): Promise<Order[]> {
        this.orders = ORDERS;
        return Promise.resolve(this.orders);
    }
}
