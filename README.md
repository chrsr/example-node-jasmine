# Example Node Jasmine app
Node.js + Node Package Manager (NPM) + Jasmine getting started app.

## Installation
To run this app you will need to install NodeJS and then the app dependencies using NPM.

#### 1. Install NodeJS + NPM:

Download and run the installer from: https://nodejs.org

#### 2. Clone this project:

    git clone git@github.com:chrsr/example-node-jasmine.git

#### 3. Install project dependencies using NPM:

    cd example-node-jasmine/
    npm install

## Getting started
Modify the following files to begin writing your app!

#### app.js
This is where your application code is written. After reviewing the example code,
you can delete everything except for the last line that exports your app global to the spec:

    module.exports = app;

#### app-spec.js
This is where you will write your unit tests. Four working examples have been provided.

## Running options

#### Run tests

    npm run test

#### Run app with tests

    npm run start

#### Run app without tests (danger!)

    npm run start-notest

or

    node app.js

## Further options (todo?)
- Add NPM step to only run named test (included as param)
- Add a linter (JSHint, ESHint) to the test step
- Create alternative QUnit or Mocha setup / examples
- Use Grunt or Gulp task runners? (In my opinion not needed)