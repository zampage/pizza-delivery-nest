import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { CustomerService } from './customer/customer.service';

@Module({
  imports: [],
  controllers: [AppController, OrderController],
  providers: [AppService, OrderService, CustomerService],
})
export class AppModule {}
