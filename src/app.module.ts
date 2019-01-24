import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';

@Module({
  imports: [],
  controllers: [AppController, OrderController, CustomerController],
  providers: [AppService, OrderService, CustomerService],
})
export class AppModule {}
