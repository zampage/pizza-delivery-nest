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
    getOrderById(@Param('id', new ParseIntPipe()) id: number): Promise<Order> {
        return this.os.findOrderById(id);
    }

    @Post()
    async create(@Body() order: CreateOrderDTO): Promise<number> {
        return this.os.addOrder(order);
    }
}