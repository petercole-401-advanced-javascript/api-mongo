<!-- # LAB - Class 09 -->
# API with MongoDB
__Version 1.1.0__

<!-- ## Project Name -->

### Author: Peter Cole

### Links and Resources

- [Submission PR]()
<!-- - [Swagger Docs]() -->
- [ci/cd](../master/.github/workflows/nodejs.yml) (GitHub Actions)
<!-- - [Back-end Server URL](http://xyz.com) (when applicable) -->
<!-- - [Front-end Application](http://xyz.com) (when applicable) -->

### Setup

#### `.env` requirements (where applicable)

- `PORT=3000` (local with json-server)
- `MONGODB_URI` - URL to the running mongo instance/db

#### How to initialize/run your application (where applicable)

- `npm start`

#### Tests

- How do you run tests?
  - Using `npm test`
<!-- - Any tests of note?
  - Functional server and category additions -->
<!-- - Describe any tests that you did not complete, skipped, etc
  - ... -->

#### UML
<!-- Link to an image of the UML for your application and response to events -->
- ![UML](../master/assets/api-mongo-UML.jpg)

<!-- TASK LIST FOR DAY 9 
Create an API server with the following features

Express server, connected to a mongo database
Morgan Logger
CORS Protection
Error Handling
2 Mongo Data Models: categories and products
Full set of generic CRUD routes which will work for any valid model, with an /api/v1 base
Routes should return the proper HTTP status codes based on the actual result of the operation
GET /api/v1/:model
Returns an object with 2 keys: count (number) and results (array of objects/records from the database)
GET /api/v1/:model/:id
Takes an ID as a route parameter
Returns a single object (the record from the database)
POST /api/v1/:model
Accepts a full record object to be added to the DB as the request body
Returns a single object (the record added to the database)
PUT /api/v1/:model/:id
Takes an ID as a route parameter
Accepts a full record, including id, to be updated as the request body
Returns a single object (the record as updated in the database)
DELETE /api/v1/:model/:id
Takes an ID as a route parameter
Returns undefined or null (the record is no longer in the database)
Implementation Requirements
Continue to use your Category and Product models
Put them in a models folder in your source tree along with the interface
Create a common router with handler functions
Handle the loading of any model dynamically
When a user requests, for example, /api/v1/categories, your app.get('/api/v1/:model') route handler should use the categories model
Create middleware using router.param on model that
Identifies a valid model in the route param
Finds the module
Requires and instantiates it
Makes that model available to the handler function so that you can still call, for example, model.create()
The app will now need to import and use this router instead of multiple routers as before
Note: Once you’ve DRY’d the routes out, the tests that you wrote should still work.
-->
