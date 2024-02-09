# About the project:
A Node.js REST API for managing users, and CI/CD pipelines implemented using GitHub actions.


## GitHub setup
- GitHub workflow which runs linter for every push (linter settings are customized).
- Merge requests can't be approved if the linter gives errors.
- Main branch is protected, no one can push directly to it.
- On every push to the main, the ts codebase is compiled into js, then the js codebase is dockerized and deployed to a running AWS ec2 instance.
- The key.pem file is saved as a GitHub secret, it can only be accessed by GitHub actions.

## Dockerization and Docker-compose
- A backend container and mongodb container is orchestrated using Docker-compose.
- Two configuration for environments: dev and prod.
- On prod environment, the Mongo docker is set up with authentication.
- On dev environment, the project folder is bind mounted and the server is live realoaded whenever the code files change.

## Npm scripts
Created scripts for easier executions of:
- Linter fix (solves the easier format errors).
- Creating docker images and removing old ones, running app with docker compose up.
- Building new docker iamge and saving it in .tar format.

## REST API routes:
'GET /': The server sends back a 'Hello' string.  
'GET /users': The server sends back all the users from the Database.  
'GET /users/:userid': The server sends back the user with the id of userid, if it exists.  
'POST /users/': The server saves the user to the database. Example for user model:


```javascript

{
  /*
    type of _id: int
    restrictions: 10_000_000_000 <= _id <= 99_999_999_999
  */
  "_id": 10000000000,

  /*
    type of firstName: string
    restrictions: 2 <= len(firstName) <= 50
  */
  "firstName": "Xin",

  /*
    type of lastName: string
    restrictions: 2 <= len(lastName) <= 50
  */
  "lastName": "Zhao"
}

```

## Schema Validation and Postman
Used joi.dev for validating the body of post requests. Configured joi to send back all the irregularities in the payload.
Made a Postman test profile, which can be found in the postman-config folder.

## If you want to test it
The current ec2 instance's public IPv4 address is: 51.21.128.140, with por 3000 open. You can download and import the Postman profile, or try to break it in other ways.  
If you want to run it locally, in the project folder run ```npm i``` and ```npm run docker-compose```.

