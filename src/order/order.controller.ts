import {Body, Controller, Get, NotAcceptableException, NotFoundException, Param, Post} from '@nestjs/common';
import {OrderService} from "./order.service";
import {Order} from "../models/order";
import {CreateOrderDTO} from "../dto/create-order-dto";

@Controller('order')
export class OrderController {

    constructor(private os: OrderService) {}

    @Get()
    async getAll(): Promise<Order[]> {
        return this.os.getAll();
    }

    @Get(':id')
    async getOrderById(@Param('id') id: number): Promise<Order> {
        // check for invalid arguments
        if (isNaN(id)) {
            throw new NotAcceptableException(`Argument "${id}" not allowed!`);
        }

        // try to find order
        const order = await this.os.findOrderById(Number(id));

        // return order if exists
        if (order) {
            return order;
        }

        // notify that order was not found
        throw new NotFoundException(`Order with id "${id}" was not found!`);
    }

    @Post()
    async create(@Body() order: CreateOrderDTO): Promise<number> {
        return this.os.addOrder(order);
    }
}
