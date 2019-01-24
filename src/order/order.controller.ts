import {Controller, Get} from '@nestjs/common';
import {Order} from "../models/order";

@Controller('order')
export class OrderController {
    private orders: Order[];

    @Get()
    getAll() {

    }
}
