# About the project:
A REST API for managing users, and a CI/CD pipeline implemented with GitHub actions.

## Accessing the API
Currently you can interact with the API at: ```51.21.128.140:3000```.  
You can download and import the Postman profile (located in postman-tests folder), or try it out in other ways.  
If you want to run it locally, clone the repo and in the project folder run ```npm i``` and ```npm run docker-compose```.


## Automated Development & Deployment Pipeline

This repository leverages GitHub Actions to streamline development and deployment processes:

- **Local Runner**: A local GitHub Actions runner is configured for faster execution of workflows.
- **Linting on Push**: A custom linter workflow runs on every push to ensure code quality. Merge requests requiring approval will fail if linting errors are present.
- **Protected Main Branch**: The main branch is protected, preventing direct pushes.
- **Automatic Deployment**: Whenever the main branch is updated, the application is redeployed to a running AWS EC2 instance.
- **Secure Credentials**: The key.pem file, used for AWS access, is securely stored as a GitHub Secret, accessible only by the Actions runner.

## Containerization and Orchestration
- The backend Docker container and mongodb Docker container is orchestrated with Docker-compose.
- There are two different configurations for dev and prod environments.
- On prod environment, the Mongo container needs authentication.
- On dev environment, the project folder is bind mounted and the server is live realoaded whenever the code files change.

## Npm scripts
Created scripts for easier executions of:
- Linter fix (solves the easier format errors).
- Creating docker images and removing old ones, running the app with docker compose up.
- Building a new docker image and saving it in .tar format.

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
  "firstName": "Voli",

  /*
    type of lastName: string
    restrictions: 2 <= len(lastName) <= 50
  */
  "lastName": "Bear"
}

```

## Schema Validation
Used joi.dev for validating the body of post requests. Configured joi to send back all the irregularities in one payload.



