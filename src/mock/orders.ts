import {Order} from "../models/order";
import {CUSTOMERS} from "./customers";
import {Pizza} from "../models/pizza";
import {Drink} from "../models/drink";
import * as moment from 'moment';

export const ORDERS = [
    Object.assign(new Order(), {
        id: 1,
        customer: CUSTOMERS[0],
        items: [
            Object.assign(new Pizza(), {name: 'Salami', price: 15}),
            Object.assign(new Drink(), {name: 'Coke', price: 3.50}),
        ],
        deliveryTime: moment().add(1, 'h'),
    }),
    Object.assign(new Order(), {
        id: 2,
        customer: CUSTOMERS[1],
        items: [
            Object.assign(new Pizza(), {name: 'Margherita', price: 13}),
        ],
        deliveryTime: moment().add(1, 'h').add(30, 'm'),
    }),
];