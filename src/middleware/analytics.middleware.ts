import {Injectable, MiddlewareFunction, NestMiddleware} from '@nestjs/common';
import {OrderService} from "../order/order.service";

@Injectable()
export class AnalyticsMiddleware implements NestMiddleware {
  constructor(private os: OrderService) {}

  resolve(): MiddlewareFunction {
    return async (req, res, next) => {
      const os = this.os;
      const send = res.send;
      res.send = function(body) {
        if (this.statusCode === 201 && !isNaN(body)) {
          os.findOrderById(Number(body))
              .then(order => console.log(`An order was placed by ${order.customer.firstname} ${order.customer.lastname}!`))
              .catch(() => { return; });
        }
        send.call(this, body);
      };
      next();
    };
  }
}
