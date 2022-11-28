const http = require('http')
const fs = require('fs')
const PORT = 3001
const server = http.createServer((req, res) => {
    res.setHeader('Content-type','application/json')
    if(req.url == '/users'){
        res.write(JSON.stringify(users,null,4))
    }
    if(req.url == '/todos'){
        res.write(JSON.stringify(todos,null,4))
    }
    if(req.url == '/posts'){
        res.write(JSON.stringify(posts,null,4))
    }
    if(req.url == '/albums'){
        res.write(JSON.stringify(albums,null,4))
    }
    res.end()
});

const users = [
    {"usersId": 1,"name":"Sodiq","data": new Date().toISOString().slice(0, 10)},
    {"usersId": 2,"name":"Ali","data": new Date().toISOString().slice(0, 10)},
    {"usersId": 3,"name":"Nabi","data": new Date().toISOString().slice(0, 10)},
    {"usersId": 4,"name":"Soli","data": new Date().toISOString().slice(0, 10)},
    {"usersId": 5,"name":"Ilyos","data": new Date().toISOString().slice(0, 10)},
    {"usersId": 6,"name":"Benazir","data": new Date().toISOString().slice(0, 10)},
    {"usersId": 7,"name":"Qodir","data": new Date().toISOString().slice(0, 10)},
    {"usersId": 8,"name":"Qobil","data": new Date().toISOString().slice(0, 10)},
    {"usersId": 9,"name":"Salim","data": new Date().toISOString().slice(0, 10)},
    {"usersId": 10,"name":"Odil","data": new Date().toISOString().slice(0, 10)}
]
const todos = [
    {"Id": 1,"name":"Go","data": new Date().toISOString().slice(0, 10)},
    {"Id": 2,"name":"Nodejs","data": new Date().toISOString().slice(0, 10)},
    {"Id": 3,"name":"Javascript","data": new Date().toISOString().slice(0, 10)},
    {"Id": 4,"name":"Rust","data": new Date().toISOString().slice(0, 10)},
    {"Id": 5,"name":"Java","data": new Date().toISOString().slice(0, 10)},
    {"Id": 6,"name":"GoLang","data": new Date().toISOString().slice(0, 10)},
    {"Id": 7,"name":"Php","data": new Date().toISOString().slice(0, 10)},
    {"Id": 8,"name":"Laravel","data": new Date().toISOString().slice(0, 10)},
    {"Id": 9,"name":"React","data": new Date().toISOString().slice(0, 10)},
    {"Id": 10,"name":"Django","data": new Date().toISOString().slice(0, 10)}
]
const posts = [
    {"Id": 1,"title":"Go is run ","data": new Date().toISOString().slice(0, 10)},
    {"Id": 2,"title":"Nodejs Server is run time","data": new Date().toISOString().slice(0, 10)},
    {"Id": 3,"title":"Javascript syncxrome language","data": new Date().toISOString().slice(0, 10)},
    {"Id": 4,"title":"java the more  is run ","data": new Date().toISOString().slice(0, 10)},
    {"Id": 5,"title":"php in laravel Server is run time","data": new Date().toISOString().slice(0, 10)},
    {"Id": 6,"title":"laravel syncxrome language","data": new Date().toISOString().slice(0, 10)},
    {"Id": 7,"title":"GoLang is run ","data": new Date().toISOString().slice(0, 10)},
    {"Id": 8,"title":"Python Server is run time","data": new Date().toISOString().slice(0, 10)},
    {"Id": 9,"title":"Javascript syncxrome language","data": new Date().toISOString().slice(0, 10)},
    {"Id": 10,"title":"Django is python spreed language","data": new Date().toISOString().slice(0, 10)}
]
const albums = [
    {"Id": 1,"title":"Go albums","data": new Date().toISOString().slice(0, 10)},
    {"Id": 2,"title":"Nodejs Server is run time photo","data": new Date().toISOString().slice(0, 10)},
    {"Id": 3,"title":"Javascript photos","data": new Date().toISOString().slice(0, 10)},
    {"Id": 4,"title":"Go albums","data": new Date().toISOString().slice(0, 10)},
    {"Id": 5,"title":"Nodejs Server is run time photo","data": new Date().toISOString().slice(0, 10)},
    {"Id": 6,"title":"Javascript photos","data": new Date().toISOString().slice(0, 10)},
    {"Id": 7,"title":"Go albums","data": new Date().toISOString().slice(0, 10)},
    {"Id": 8,"title":"Nodejs Server is run time photo","data": new Date().toISOString().slice(0, 10)},
    {"Id": 9,"title":"Javascript photos","data": new Date().toISOString().slice(0, 10)},
    {"Id": 10,"title":"Python spreed photos","data": new Date().toISOString().slice(0, 10)}
]
server.listen(PORT, () => console.log('Server is run'));