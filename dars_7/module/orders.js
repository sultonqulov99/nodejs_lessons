const fs = require('fs')
const GET = (req,res) => {
    let user = fs.readFileSync('database/order.json')
    user = JSON.parse(user)
    const {userId, orderId} = req.query
    
    let users = user.filter(user => {
        const usId = userId ? user.userId == userId : true 
        const orId = orderId ? user.orderId == orderId : true 
        return usId && orId
    })
    // users = JSON.parse(users)
    // console.log(users);
    res.writeHeader(200,{ 'Content-Type': 'application/json'})
    res.write(JSON.stringify(users))
    return res.end()
}
const POST = async (req,res) => {
    try {
        const {userId,foodId,count } = await req.body
        if(!count){
            throw new Error("Invalid count!")
        }
        let user = fs.readFileSync('database/user.json')
        let userFood = fs.readFileSync('database/food.json')
        let userOrder = fs.readFileSync('database/order.json')
        user = JSON.parse(user)
        userFood = JSON.parse(userFood)
        userOrder = JSON.parse(userOrder)
        let users = user.filter(el => el.userId == userId)
        let userFoods = userFood.filter(el => el.foodId == foodId)
        userOrder.push({
            orderId: userOrder.length ? userOrder.at(-1).orderId + 1 : 1,
            user:users,
            food:userFoods,
            count
        })
        
        fs.writeFileSync('database/order.json',JSON.stringify(userOrder,null,4))
        res.writeHeader(201, {'Content-type': 'application/json'})
        res.write(JSON.stringify({
            status:201,
            massage: "Created Order"
        }))
        return res.end()
    } catch (error) {
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
        const {orderId} = await req.body
        let userOrder = fs.readFileSync('database/order.json')
        userOrder = JSON.parse(userOrder)

        let response = userOrder.filter(user => user.orderId != orderId)
        fs.writeFileSync('database/order.json',JSON.stringify(response,null,4))
        res.writeHeader(201,{'Content-type':'application/json'})
        res.write(JSON.stringify({
            status:201,
            massage: 'DELETE ORDERS'
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
        const {orderId,count} = await req.body
        let userOrder = fs.readFileSync('database/order.json')
        userOrder = JSON.parse(userOrder)

        let response = userOrder.find(user => user.orderId == orderId)
        if(count) response.count = count
        fs.writeFileSync('database/order.json',JSON.stringify(userOrder,null,4))
        res.writeHeader(200,{'Content-type':'application/json'})
        res.write(JSON.stringify({
            status:200,
            massage: 'UPDATE ORDERS'
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