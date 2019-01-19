# Eat Da Burger

This is a Node.JS Express app that uses Handlebars as the template engine and JawsDB (with MySQL) for data persistence. The app allows users to add burgers to a list of burgers to be eaten, which can then be clicked to be eaten, moving them to the eaten column.

  

## Getting Started

  

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

  

### Prerequisites

The following must be installed on your machine to run the app locally:

- Git Bash

- NodeJS

- NPM

- MySQL

  
### Installing Dependencies

Use NPM to install all required dependencies:

  

npm install

  

## Running the App

  

Use the following command to start the app:

  

`npm start`

  

## Using the App:

### Demo:

You can use the live app at the following url: https://arcane-headland-31517.herokuapp.com/


## Programming Methodology

  

### Approach

The *burger* model uses the manually created *orm* to make SQL queries for data which are utilized by the *burgers_controller*.

There are three routes in *burgers_controller.js* through which the app runs: 

- *GET /* - This returns all burgers stored in the database as a JSON array. The array of burgers is passed into *index.handlebars* which then adds burgers which are not `devoured` (false) to the *Not Eaten* list and the burgers which haven been `devoured` (true) to the *Eaten* list. The 

- *POST /api/:burgerName* - Adds a new burger to the database - called when the user clickst the Add Burger button.

- *PUT /api/:id* - Updates the `devoured` property of the burger from false to true (or 0 to 1). This also updates the view to display the burger in the Eaten list.

## Built With

  
- NodeJS

- NPM

- Express

- Handlebars

- MySQL

- Heroku

- JawsDB


## Syntax and Conventions

The app is written in ES6. 
