const fs = require('fs')

const GET = (req,res) => {
    let user = fs.readFileSync('database/user.json')
    user = JSON.parse(user)
    const {userId, userName, contact} = req.query
    
    let users = user.filter(user => {
        const byId = userId ? user.userId == userId : true 
        const byUserName = userName ? user.userName == userName : true
        const byContact = contact ? user.contact == contact : true

        return byId && byUserName && byContact
    })
    // users = JSON.parse(users)
    console.log(users);
    res.writeHeader(200,{ 'Content-Type': 'application/json'})
    res.write(JSON.stringify(users))
    return res.end()
}

const POST = async (req,res) => {
    try {

        let phoneChecker = /^[+]998[9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/i
        const {userName,contact } = await req.body
        if(!userName || userName.length < 3 || userName.length > 30){
            throw new Error("Invalid username!")
        }
        if(!phoneChecker.test(contact)){
            throw new Error('Invalid cantact!')
        }
        let user = fs.readFileSync('database/user.json')
        user = JSON.parse(user)
        console.log(user.at(-1).userId);
        user.push({
            userId: user.length ? user.at(-1).userId + 1 : 1,
            userName,
            contact
        })
        fs.writeFileSync('database/user.json',JSON.stringify(user,null,4))
        res.writeHeader(201, {'Content-type': 'application/json'})
        res.write(JSON.stringify({
            status:201,
            massage: "Created users"
        }))
        return res.end()
    } catch (error) {
        res.writeHeader(400, {'Content-type': 'application/json'})
        res.write(JSON.stringify({
            status:404,
            massage: error.massage
        }))
        return res.end()
    }
}

const DELETE = async (req,res) => {
    try {
        const {userId} = await req.body
        let user = fs.readFileSync('database/user.json')
        user = JSON.parse(user)
        // console.log(user);

        let response = user.filter(user => user.userId != userId)
        fs.writeFileSync('database/user.json',JSON.stringify(response,null,4))
        res.writeHeader(201,{'Content-type':'application/json'})
        res.write(JSON.stringify({
            status:201,
            massage: 'DELETE USERS'
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
        const {userId,userName,contact} = await req.body
        let user = fs.readFileSync('database/user.json')
        user = JSON.parse(user)
        let response = user.find(use => use.userId == userId)
        if(userName) response.userName = userName
        if(contact) response.contact = contact

        fs.writeFileSync('database/user.json',JSON.stringify(user,null,4))
        res.writeHeader(200,{'Content-type':'application/json'})
        res.write(JSON.stringify({
            status:200,
            massage: 'UPDATE USERS'
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