import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {OrderService} from "./order.service";
import {Order} from "../models/order";
import {CreateOrderDTO} from "../dto/create-order-dto";

@Controller('order')
export class OrderController {

    constructor(private os: OrderService) {}

    @Get()
    getAll(): Promise<Order[]> {
        return this.os.getAll();
    }

    @Get(':id')
    getOrderById(@Param('id', new ParseIntPipe()) id: number): Promise<Order> {
        return this.os.findOrderById(id);
    }

    @Post()
    create(@Body() order: CreateOrderDTO): Promise<number> {
        return this.os.addOrder(order);
    }
}