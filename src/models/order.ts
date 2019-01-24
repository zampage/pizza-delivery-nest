import {Customer} from "./customer";
import {Product} from "../interface/product";
import * as moment from 'moment';

export class Order {
    id: number;
    customer: Customer;
    items: Product[];
    deliveryTime: moment.Moment;
}