<!-- # LAB - Class 08 -->
# API with MongoDB
__Version 1.0.0__

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

<!-- TASK LIST FOR DAY 8 
Create an API server with the following features

Express server, connected to a mongo database
Morgan Logger
CORS Protection
Error Handling
2 Mongo Connected Data Models: categories and products
Full set of CRUD routes for each model (categories and products), with an /api/v1 base
Routes should return the proper HTTP status codes based on the actual result of the operation
GET /api/v1/categories
Returns an object with 2 keys: count (number) and results (array of objects/records from the database)
GET /api/v1/categories/ID
Takes an ID as a route parameter
Returns a single object (the record from the database)
POST /api/v1/categories
Accepts a full record object to be added to the DB as the request body
Returns a single object (the record added to the database)
PUT /api/v1/categories/ID
Takes an ID as a route parameter
Accepts a full record, including id, to be updated as the request body
Returns a single object (the record as updated in the database)
DELETE /api/v1/categories/ID
Takes an ID as a route parameter
Returns undefined or null (the record is no longer in the database)
Implementation Requirements
Import the mongo data models (categories and products) from your earlier data modeling lab.
Put them in a models folder in your source tree along with the interface
Write supergoose tests to verify that your routes are functioning
/post saves a new record
/get gets all records
…etc
Routes and handler functions must be modular (via express.router())
They should go into a routes folder as separate files
One for categories
One for products
They will need to export an express router instance
The app will now need to import and use these routes
Note: Once you’ve moved the routes out, the tests that you wrote should still work.
Testing
Using supergoose, Write a complete set of data model and server tests
Refer to your previous assignments for examples and inspiration
Web Server Visual Tests
Open this React Application
In the form at the top of the page, enter the URL to your API Server
This server is configured to use the routes noted in the first lab requirement
If your lab is working, this app will show your API Data!
-->
