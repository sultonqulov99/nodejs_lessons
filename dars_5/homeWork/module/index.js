const userController = require('./users.js')
const todoController = require('./todos.js')

const controllers = {
    'GET': {},
    'POST':{},
    'DELETE':{},
    'PUT':{}
}
//users
controllers['GET']['/users'] = userController['GET']
controllers['POST']['/users'] = userController['POST']
controllers['DELETE']['/users'] = userController['DELETE']
controllers['PUT']['/users'] = userController['PUT']

//posts
controllers['GET']['/posts'] = todoController['GET']
controllers['POST']['/posts'] = todoController['POST']
controllers['DELETE']['/posts'] = todoController['DELETE']
controllers['PUT']['/posts'] = todoController['PUT']

module.exports = controllers