const fs = require('fs')
const GET = (req,res) => {
    let user = fs.readFileSync('database/food.json')
    user = JSON.parse(user)
    const {foodId} = req.query
    
    let users = user.filter(user => {
        const byId = foodId ? user.foodId == foodId : true 

        return byId 
    })
    res.writeHeader(200,{ 'Content-Type': 'application/json'})
    res.write(JSON.stringify(users))
    return res.end()
}
module.exports = {
    GET
}