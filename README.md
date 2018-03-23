# throwaway

Project Stack: Angular2 w/ Typescript, Rails 5.1, SQLite3 (soon to be mySQL), Jest

# Test runner: Jest
## Reference
https://medium.com/@kylefox/how-to-setup-javascript-testing-in-rails-5-1-with-webpacker-and-jest-ef7130a4c08e

## Setup Notes and Limitations
Jest has been setup just enough so that ```yarn test``` will run. The reference article mentions some setup for Babel, but this is not setup in this project yet. As a result, ```import``` statements might not work.

## Usage
Run ```yarn test``` to execute tests once
If you want Jest to watch for changing test files, run ```yarn test --watchAll```
