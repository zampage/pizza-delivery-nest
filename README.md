# Pizza Delivery Nest Backend

Pizza delivery test project for the [nest framework](https://docs.nestjs.com/).

## Requirements

- For running the Project: `nodemon`
- For working on the Project: `@nestjs/cli`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Current Routes

- `GET /` : shows currently placed orders as HTML
- `GET /order` : API Endpoint for getting all orders
- `GET /order/:id` : API Endpoint for getting an order by ID
- `POST /order` : API Endpoint for adding an order
- `GET /customer` : API Endpoint for getting all customers (protected by Auth Guard)
- `GET /customer/:id` : API Endpoint for getting a customer by ID which also returns a bill for current orders

## Example Requests

### Authorized access to customer Endpoint

```
GET http://localhost:3000/customer
Authorization: supersecrettoken
```

### Placing a new order

```
POST http://localhost:3000/order
Content-Type: application/json

{
  "customerId": 3,
  "items": [
    {"name": "Margherita", "price": 15}
  ],
  "deliveryTime": "2019-01-24 15:00"
}
```