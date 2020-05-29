# NodeJS

Template of a NodeJS's application using Sequelize ORM

For further info about migrations and seeds acess this [link](https://sequelize.org/master/manual/migrations.html).

NodeJS version: 14.3.0

# Project dependencies
* dotenv
* sequelize
* sequelize-cli
* express
* body-parser
* morgan
* tedious
* fibonacci (just for worker_threads example)

# How to run the application

I used Yarn to install the project's dependencies, but you can use npm either.

After all the initial installation step for NodeJS, Yarn or NPM. If you don't know how to, just google it.

Create a ```.env file``` on root folder, and add those enviroment variables: 
- NODE_ENV=development
- PORT=serverPort
- LOGIN=databaseLogin
- PASSWORD=databasePassword

Open he terminal on your folder and type 
```yarn install``` to install project's packages and ```node index.js``` to run the application.

# How to use Sequelize's migrations or seeds
Access this [link](https://sequelize.org/master/manual/migrations.html).

# How to use Sequelize's paranoid
Access this [link](https://sequelize.org/master/manual/paranoid.html).

# Learn about Node's Worker_Threads
Access this [link](https://nodejs.org/dist/latest-v14.x/docs/api/worker_threads.html)
