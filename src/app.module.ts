import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {OrderController} from './order/order.controller';
import {OrderService} from './order/order.service';
import {CustomerService} from './customer/customer.service';
import {CustomerController} from './customer/customer.controller';
import {AnalyticsMiddleware} from "./middleware/analytics.middleware";

@Module({
  imports: [],
  controllers: [AppController, OrderController, CustomerController],
  providers: [OrderService, CustomerService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(AnalyticsMiddleware)
        .forRoutes({path: 'order', method: RequestMethod.POST});
  }
}
