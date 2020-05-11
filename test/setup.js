const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest

//if using ESLint (npm i eslint) add the following to .eslintrc.js file: 

// "globals": {
//     "supertest": true,
//     "expect": true
//   }