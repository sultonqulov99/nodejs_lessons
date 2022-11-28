const GET = (req,res) => {
    const {userId, gender, age} = req.query
    
    const users = process.db.users.filter(user => {
        const byId = userId ? user.userId == userId : true 
        const byGender = gender ? user.gender == gender : true
        const byAge = age ? user.age == age : true

        return byId && byGender && byAge
    })
    res.writeHeader(200,{ 'Content-Type': 'application/json'})
    res.write(JSON.stringify(users))
    return res.end()
}

const POST = async (req,res) => {
    try {
        const {username, age, gender} = await req.body
        if(!username || username.length > 50){
            throw new Error("Invalid username!")
        }
        if(isNaN(+age)){
            throw new Error('Invalid age!')
        }
        if(!['male','female'].includes(gender)){
            throw new Error('Invalid gender!')
        }
        process.db.users.push({
            userId: process.db.users.length ? process.db.users.at(-1).userId + 1 : 1,
            username,
            age,
            gender
        })
        res.writeHeader(201, {'Content-type': 'application/json'})
        res.write(JSON.stringify({
            status:201,
            massage: "Created users"
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
        const {userId} = await req.body
        let response = process.db.users.filter(user => user.userId != userId)
        process.db.users = response
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
        const {userId,username,age,gender} = await req.body
        let response = process.db.users.find(user => user.userId == userId)
        if(username) response.username = username
        if(age) response.age = age 
        if(gender) response.gender = gender
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