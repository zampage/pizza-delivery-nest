import {Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post} from '@nestjs/common';
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
    async getOrderById(@Param('id', new ParseIntPipe()) id: number): Promise<Order> {
        // try to find order and return it
        const order = await this.os.findOrderById(id);
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