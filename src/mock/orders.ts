import {Pizza} from "../models/pizza";
import {Drink} from "../models/drink";
import * as moment from 'moment';

export const ORDERS = [
    {
        id: 1,
        customerId: 1,
        items: [
            Object.assign(new Pizza(), {name: 'Salami', price: 15}),
            Object.assign(new Drink(), {name: 'Coke', price: 3.50}),
        ],
        deliveryTime: moment().add(1, 'h'),
    },
    {
        id: 2,
        customerId: 2,
        items: [
            Object.assign(new Pizza(), {name: 'Margherita', price: 13}),
        ],
        deliveryTime: moment().add(1, 'h').add(30, 'm'),
    },
];
