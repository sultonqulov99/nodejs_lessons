const GET = (req,res) => {
    const {todoId,userId, completed} = req.query
    
    const todos = process.db.todos.filter(todo => {
        const byId = todoId ? todo.todoId == todoId : true 
        const byUserId = userId ? todo.userId == userId : true
        const bycompleted = ['true','false'].includes(completed) ? String(todo.completed) === completed: true
        return byId && byUserId && bycompleted
    })
    res.writeHeader(200,{ 'Content-Type': 'application/json'})
    res.write(JSON.stringify(todos))
    return res.end()
}

const POST = async (req,res) => {
    try {
        const { userId,completed,title } = await req.body
    
        if(![true,false].includes(completed)){
            throw new Error('Invalid completed!')
        }
        process.db.todos.push({
            todoId: process.db.todos.length ? process.db.todos.at(-1).todoId + 1 : 1,
            userId,
            completed,
            title
        })
        res.writeHeader(201, {'Content-type': 'application/json'})
        res.write(JSON.stringify({
            status:201,
            massage: "Created users"
        }))
        return res.end()
    } 
    catch (error) {
        res.writeHeader(400, {'Content-type': 'application/json'})
        res.write(JSON.stringify({
            status:400,
            massage: error.massage
        }))
        return res.end()
    }
}

const DELETE = async (req,res) => {
    try {
        const { todoId } = await req.body 
        let response = process.db.todos.filter(user => user.todoId != todoId)
        process.db.todos = response
        res.writeHeader(400,{'Content-type':'application/json'})
        res.write(JSON.stringify({
            status:201,
            massage: 'DELETE TODOS'
    }))
    return res.end()
    } catch (error) {
        res.writeHeader(400,{'Content-type':'application/json'})
        res.write(JSON.stringify({
            status:400,
            massage: error.massage
        }))
        return res.end()
    }
}

const PUT = async (req,res) => {
    try {
        const { todoId,userId,completed,title } = await req.body
        let response = process.db.todos.find(user => user.todoId == todoId)
        if(userId) response.userId = userId
        if(completed) response.completed = completed 
        if(!completed) response.completed = completed 
        if(title) response.title = title
        res.writeHeader(200,{'Content-type':'application/json'})
        res.write(JSON.stringify({
            status:200,
            massage: 'UPDATE TODOS'
        }))
        return res.end()
    } catch (error) {
        res.writeHeader(400,{'Content-type':'application/json'})
        res.write(JSON.stringify({
            status:400,
            massage: error.massage
        }))
        return res.end()
    }

}

module.exports = {
    GET,
    POST,
    DELETE,
    PUT
}