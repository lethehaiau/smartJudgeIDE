# smartJudge IDE
smartJudge is an online platform where students can practice with introductory programming problems and receive auto generated repair hints when solution is incorrect.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
Link to smartJudge API: https://github.com/lethehaiau/smartJudge

## Install
Require [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

## Run
In the project directory, run:
### `yarn`
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.
You can change the port number in .env

## Usage
The smartJudge is a web app with two component back-end include API and front-end include problem practice interface. The early version of this web app is working end to end with one default programming problem.
A user can: 
  * Read the programming assignment.
  * Programming on the built-in editor in the web app.
  * Submit the problem. See the submission status.
  * Receive feedback from the repair generate system if the solution is working but incorrect
  * Test their code themselves with the custom input option.

## Demo
[![SMART JUDGE DEMO](https://img.youtube.com/vi/Y1FN9sPtCWw/0.jpg)](https://www.youtube.com/watch?v=Y1FN9sPtCWw)

## Development
This Web App use Redux for state management. API fetch can be found in actions folder [index.js](https://github.com/lethehaiau/smartJudgeIDE/blob/master/src/actions/index.js).<br />
Setup the [API repos](https://github.com/lethehaiau/smartJudge) first and run it.<br />
The this IDE will call local API via http://localhost:3000.<br />
UI components  powered by [Material-UI](https://material-ui.com/).<br />

## Roadmap

- [ ] Add or Edit Problem
- [ ] Admin Login
- [ ] Landing Page
- [ ] Problems Listing
