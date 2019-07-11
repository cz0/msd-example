## Project setup

* Checkout project
* Set up db and run migrations - use e.g. [Postgres.app](https://postgresapp.com/)
* We are using [knex](http://knexjs.org/) and [Objection.js](http://vincit.github.io/objection.js/) for migrations and database access
* Create a `.env` file at the root of the project to set required local environment variables. Or just copy the env sample:
  ```bash
  $ cp .env-sample .env
  ```
* Then run migration locally
  ```bash
  $ NODE_ENV=local npm run migrate
  ```

* Install [Nodemon](https://github.com/remy/nodemon) to apply server hot reload

* Run the server
  ```bash
  $ NODE_ENV=local npm start
  ```

* When the server is running, we can get all ships by
  ```bash
  $ curl http://localhost:3000/api/v1/ships
  ```
  or create a new one
  ```bash
  $ curl -d '{"name":"The Black Pearl", "speed":100}' -H "Content-Type: application/json" -XPOST http://localhost:3000/api/v1/ships
  ```


         

