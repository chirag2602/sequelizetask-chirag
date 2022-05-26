# Object Relational Model with Sequelize in Node

## ORM

Object–relational mapping (ORM) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages.

## Sequelize

Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.

## Folder Structure

```
orm
|___node_modules
|___controllers
|___database
|___docs
|___models
|___routes
|___services
|___utils
│   .env
|   .gitignore
|   app.js
|   package-lock.json
|   package.json
|   README.md
|   server.js
```

### node_modules

Contains all the libraries we require and installed.

### controllers

The logical functions are here

### database

The database connection

### docs

Documentation files

### models

The table structure for database

### routes

The end point for our APIs

### services

The helper functions for our controllers

### utils

Helper functions for our app like Catch, Error, JWTToken etc.

### .env

Environment Variables we use in our application.

### .gitignore

The ignored files and folder like node_modules. These will be ignored by git.

### app.js

We are importing everything into this file and this file will get imported into server.js

### package-lock.json

Locked dependencies

### package.json

Package file for node application. It includes the application details, its dependencies etc.

### server.js

The script file which we use to run.

### README.md

It's me 😅
