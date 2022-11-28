const [,, a, b, operation] = process.argv

let plus = require('./plus')
let [minus] = require('./minus')
let {mult} = require('./mult')
let divide = require('./divide')

const operations = {
    'plus' : plus(a,b),
    'minus' : minus(a,b),
    'mult' : mult(a,b),
    'divide' : divide(a,b)
}

console.log(operations[operation]);