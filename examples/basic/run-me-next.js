const JSDB = require('../..')

// This will load test database with the people table we created earlier.
const db = new JSDB('db')

// Let’s make sure Oskar’s in there… ;)
console.log(db.people[2])
