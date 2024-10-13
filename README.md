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

## Features

- Fetch all webtoons with basic details.
- Add new webtoon entries.
- Fetch specific webtoons by ID.
- Delete webtoon entries.
- Secure endpoints with JWT authentication.

## Technologies Used

- *Node.js*: JavaScript runtime for building the server.
- *Express.js*: Web framework for Node.js to create the API.
- *MongoDB*: NoSQL database for storing webtoon data.
- *Mongoose*: ODM library for MongoDB and Node.js.
- *bcrypt*: Library for hashing passwords.
- *jsonwebtoken*: Library for JWT authentication.
- *dotenv*: Module to load environment variables from a .env file.

## API Endpoints

### 1. Webtoons

- *GET /webtoons*
  - Fetch all webtoons with basic details (title, summary, characters).
  
- *POST /webtoons*
  - Add a new webtoon entry.
  - *Request Body*:
    json
    {
        "title": "New Webtoon",
        "summary": "This is a summary.",
        "characters": ["Character1", "Character2"]
    }
    

- *GET /webtoons/:id*
  - Fetch a specific webtoon by its ID.

- *DELETE /webtoons/:id*
  - Remove a webtoon entry by its ID.

### 2. Authentication

- *POST /auth/register*
  - Register a new user.
  - *Request Body*:
    json
    {
        "username": "your_username",
        "password": "your_password"
    }
    

- *POST /auth/login*
  - Log in and receive a JWT token.
  - *Request Body*:
    json
    {
        "username": "your_username",
        "password": "your_password"
    }
    

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd webtoon-api
