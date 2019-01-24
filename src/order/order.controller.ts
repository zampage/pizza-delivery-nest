import {Controller, Get} from '@nestjs/common';
import {OrderService} from "./order.service";
import {Order} from "../models/order";

@Controller('order')
export class OrderController {

    constructor(private os: OrderService) {}

    @Get()
    async getAll(): Promise<Order[]> {
        return this.os.getAll();
    }
}
