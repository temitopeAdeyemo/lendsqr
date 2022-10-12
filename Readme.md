### Account Funding API

### Introduction

Lendsqr is a Fintech application that allows user to register or login to the system, perform transactions which includes funding of account, and withdraw of funds from the account and funds transfer to other accounts.\

Users get account on registration and their phone number (Unique for all users) is used as account number for subsequent transaction. Users default Pin is 1234.

[Postman-Documentation](https://documenter.getpostman.com/view/19330071/2s83zmNP7S)

### Technology Used

- [Node.js](https://nodejs.org/) - Server Side
- [Express.js](https://expressjs.com/) for routing
- [MySQL](https://www.mysql.com/) for database
- [Knex.js](https://knexjs.org/) (ORM)
- [Heroku](https://www.heroku.com/) for deployment and hosting
- [Scalegrid](https://scalegrid.io/) to manage the deployment of the database on cloud premises


### How to run locally

```bash
yarn install
yarn start:dev
```

### User Authentication API Reference

#### Register

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "email": "
    "full_name": "
    "email": "
    "phoneNumber": "
    "password": "
    }' \
    https://temitope-julius-lendsqr-be-test.herokuapp.com/v1/auth/register
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `name`     | `string` | **Required**. full_name is required     |
| `email`    | `string` | **Required**. email is required    |
| `phoneNumber`    | `string` | **Required**. phoneNumber is required    |
| `password` | `string` | **Required**. password is required |

#### Login

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "email": "
    "password": "
    }' \
    https://temitope-julius-lendsqr-be-test.herokuapp.com/v1/auth/login
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `email`    | `string` | **Required**. email is required    |
| `password` | `string` | **Required**. password is required |


### User Accounting API Reference

#### Funding OF Account 

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "amount": "
  "bearer": token"
  }' \
    https://temitope-julius-lendsqr-be-test.herokuapp.com/v1/account/fund
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `amount`  | `string` | **Required**. amount is required       |
| `bearer`  | `string` | **Required**. bearer token is required |

#### Transfer Of Funds To Other Users

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "amount": "
  "accountNumber": "
  "pin": "
  "bearer": token""
  }' \
    https://temitope-julius-lendsqr-be-test.herokuapp.com/v1/account/transfer-fund
```

| Parameter     | Type     | Description                            |
| :------------ | :------- | :------------------------------------- |
| `amount`   | `string` | **Required**. amount is required    |
| `accountNumber` | `string` | **Required**. accountNumber is required  |
| `pin` | `string` | **Required**. pin is required  |
| `bearer`      | `string` | **Required**. bearer token is required |

#### Withdraw fund 

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "amount": "
    "bearer": token"
  }' \
    https://temitope-julius-lendsqr-be-test.herokuapp.com/v1/account/withdraw-fund
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `amount`  | `string` | **Required**. amount is required       |
| `bearer`  | `string` | **Required**. bearer token is required |

Copyright (c) 2022 Temitope
