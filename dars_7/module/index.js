const userController = require('./users.js')
const foodController = require('./foods.js')
const orderController = require('./orders.js')

const controllers = {
    'GET': {},
    'POST': {},
    'DELETE':{},
    'PUT':{}
}
controllers['GET']['/foods'] = foodController['GET']
controllers['GET']['/users'] = userController['GET']
controllers['GET']['/orders'] = orderController['GET']

controllers['POST']['/users'] = userController['POST']
controllers['POST']['/orders'] = orderController['POST']

controllers['DELETE']['/users'] = userController['DELETE']
controllers['DELETE']['/orders'] = orderController['DELETE']

controllers['PUT']['/users'] = userController['PUT']
controllers['PUT']['/orders'] = orderController['PUT']



module.exports = controllers