# Node API Starter Template
This is a demo project to demonstrate How can you write API services using Nodejs and express.

## Introduction 

This project contains all the necessary things to get started with writing an API in NodeJS. It includes Inversify, Inversify-Express-Utils for dependency injection, sequelize for the database ORM, and jest for testing.

The idea of this project is to bring a batteries included project that is not too opinionated, yet brings in libraries that allow for the creation of API using NodeJS

The initial template shows an example with a basic CRUD application using sequelize-typecript. Since the structure of the project is split up into features, you can delete the todo folder inside api and remove the todoModule from inversify.config.ts, so it is no longer part of the application.

The repository tries to follow the best practices for structuring a repository.
 


## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Getting Started

To Run the starter you need to install xampp .you can download from here <a href="https://www.apachefriends.org/download.html">Download XAMPP</a>.
Create a new database with name **node_starter** 
Improat sql file or run the sql command inside data base.

```
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `First_Name` varchar(100) NOT NULL,
  `Last_Name` varchar(100) NOT NULL,
  `User_Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Phone_Number` varchar(100) NOT NULL,
  `Active` tinyint(4) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `user`
ADD PRIMARY KEY (`id`);

ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

````

## Setting up the local environment

**Node.js**

Angular requires an active LTS or maintenance LTS version of Node.js.
For more information on installing Node.js, see <a href="https://nodejs.org">nodejs.org</a>. If you are unsure what version of Node.js runs on your system, run node -v in a terminal window.

**npm package manager**

Angular, the Angular CLI, and Angular applications depend <a href="https://docs.npmjs.com/getting-started/what-is-npm"> npm packages </a> on npm packages for many features and functions. To download and install npm packages, you need an npm package manager. This guide uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run npm -v in a terminal window.

```shell
git clone https://github.com/muhammadmukhtiar/node_starter.git
```

```
cd node_starter

```
 
```
npm install
```
 
 ```
npm start
```

Open browser or postman  application is running at <a href="http://localhost:3000" target="_blank" title="localhost">
http://localhost:3000</a> 

Now you can use Postman to test and develop API services.You can find postman collection file on this repo as well



Feel free to contact me if need any help

Name:Mukhtiar
Email:mukhtiarfsd@gmail.com



***Good Luck **






