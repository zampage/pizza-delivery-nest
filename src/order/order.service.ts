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

    private fetchAll(): Promise<Order[]> {
        this.orders = ORDERS;
        return Promise.resolve(this.orders);
    }
}
