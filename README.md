# ExpressJS MongoDB Backend

This is a backend application built using ExpressJS and MongoDB. It provides an endpoint `/user` that accepts a POST request with email and username, and checks if the user is already registered in the database or not. If the user is already registered, it sends back an error message. If the user is not registered, it creates a new entry in the database.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine
2. Install the dependencies using `npm install`
3. Start the server using `npm start`

## Dependencies

The following dependencies are used in this project:

- [ExpressJS](https://expressjs.com/) - A fast, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - A cross-platform document-oriented database program
- [Mongoose](https://mongoosejs.com/) - A MongoDB object modeling tool designed to work in an asynchronous environment

## Endpoints

### /user

#### POST

Accepts a POST request with email and username. Checks if the user is already registered or not. If the user is already registered, it sends back an error message. If the user is not registered, it creates a new entry in the database.

##### Request Body

```
{
"email": "example@example.com",
"username": "example"
}
```

##### Response Body

###### Success

```
{
"message": "User created successfully"
}
```

###### Error

```
{
"message": "User already exists"
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [ExpressJS Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
