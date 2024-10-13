# Webtoon API

## Overview

This is a RESTful API for managing a collection of webtoons inspired by "Top 14 Castle Swimmer Characters You Need to Know." The API allows users to perform CRUD (Create, Read, Update, Delete) operations on webtoon data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Setup Instructions](#setup-instructions)
- [Testing the API](#testing-the-api)
- [Security Practices](#security-practices)
- [Submission Instructions](#submission-instructions)
- [License](#license)

## Features

- Fetch all webtoons with basic details.
- Add new webtoon entries.
- Fetch specific webtoons by ID.
- Delete webtoon entries.
- Secure endpoints with JWT authentication.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for Node.js to create the API.
- **MongoDB**: NoSQL database for storing webtoon data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **bcrypt**: Library for hashing passwords.
- **jsonwebtoken**: Library for JWT authentication.
- **dotenv**: Module to load environment variables from a `.env` file.

## API Endpoints

### 1. Webtoons

- **GET /webtoons**
  - Fetch all webtoons with basic details (title, summary, characters).
  
- **POST /webtoons**
  - Add a new webtoon entry.
  - **Request Body**:
    ```json
    {
        "title": "New Webtoon",
        "summary": "This is a summary.",
        "characters": ["Character1", "Character2"]
    }
    ```

- **GET /webtoons/:id**
  - Fetch a specific webtoon by its ID.

- **DELETE /webtoons/:id**
  - Remove a webtoon entry by its ID.

### 2. Authentication

- **POST /auth/register**
  - Register a new user.
  - **Request Body**:
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```

- **POST /auth/login**
  - Log in and receive a JWT token.
  - **Request Body**:
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd webtoon-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your MongoDB URI and JWT secret:
     ```plaintext
     MONGODB_URI=mongodb+srv://<username>:<password>@your-cluster.mongodb.net/<dbname>
     JWT_SECRET=your_jwt_secret
     ```

4. Start the server:
   ```bash
   npm start
   ```

5. The API will be running on `http://localhost:5000`.

## Testing the API

You can test the API using tools like Postman or curl. Below are some example requests:

### Fetch all webtoons
```bash
curl -X GET http://localhost:5000/webtoons
```

### Add a new webtoon
```bash
curl -X POST http://localhost:5000/webtoons \
-H "Content-Type: application/json" \
-d '{
    "title": "New Webtoon",
    "summary": "This is a summary.",
    "characters": ["Character1", "Character2"]
}'
```

### Fetch a specific webtoon
```bash
curl -X GET http://localhost:5000/webtoons/<id>
```

### Delete a webtoon
```bash
curl -X DELETE http://localhost:5000/webtoons/<id>
```

### Authentication

- **Register a new user**:
```bash
curl -X POST http://localhost:5000/auth/register \
-H "Content-Type: application/json" \
-d '{
    "username": "your_username",
    "password": "your_password"
}'
```

- **Log in**:
```bash
curl -X POST http://localhost:5000/auth/login \
-H "Content-Type: application/json" \
-d '{
    "username": "your_username",
    "password": "your_password"
}'
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
### Customization

- **Replace placeholders**: Make sure to replace `<repository_url>`, `<username>`, `<password>`, and other placeholders with your actual values.
