import {Customer} from "./customer";
import {Product} from "../interface/product";
import * as moment from 'moment';

export class Order {
    private customer: Customer;
    private items: Product[];
    private deliveryTime: moment.Moment;
}