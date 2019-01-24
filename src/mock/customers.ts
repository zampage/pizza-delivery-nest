import {Customer} from "../models/customer";

export const CUSTOMERS = [
    Object.assign(new Customer(), {firstname: 'Markus', lastname: 'Chiarot', adress: 'Einestrasse 5, 3400 Burgdorf'}),
    Object.assign(new Customer(), {firstname: 'Max', lastname: 'Muster', adress: 'Musterstrasse 27C, 3414 Oberburg'}),
    Object.assign(new Customer(), {firstname: 'Bärner', lastname: 'Giu', adress: 'Bernstrasse 128, 3001 Bern'}),
];
