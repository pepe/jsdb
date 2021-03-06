const JSDB = require('../..')

const db = new JSDB('db', { deleteIfExists: true })

// Create test/people.json with some data.
db.people = [
  {name: 'Aral', age: 43},
  {name: 'Laura', age: 34},
  {name: 'Osky', age: 8}
]

// console.log('===>', db.people.where('name').is('Aral')[0].pet='Oskar')

const peopleYoungerThan35 = db.people.where('age').isLessThan(35).get()

console.log('people under 35 result set', peopleYoungerThan35)

console.log('Adding object to result set (should not be persisted)')

peopleYoungerThan35.push({name: 'baby', age: 1})

console.log('people under 35 result set', peopleYoungerThan35)

console.log('db.people', db.people)

console.log('referencing first record from results', peopleYoungerThan35[0])

console.log('updating first record (should trigger save)')
peopleYoungerThan35[0].name = 'Laura Kalbag'

console.log('db.people', db.people)

console.log(db.people.where('age').isGreaterThan(35).and('name').is('Aral').get())

console.log(db.people.whereIsTrue('valueOf.name === "Aral" || (valueOf.name === "Laura Kalbag" && valueOf.age > 50)').get())


console.log(db.people.where('name').startsWith('a').get())


console.log(db.people.where('name').includes('ka').get())
