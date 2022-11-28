const http = require('http')
const fs = require('fs')
const PORT = 1098

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    if(req.url == '/')
        res.write(fs.readFileSync(getRouters[req.url]))
    if(req.url == '/users'){
        res.write(fs.readFileSync(getRouters[req.url]))
    }
    if(req.url == '/sobir'){
        res.write(fs.readFileSync(getRouters[req.url]))
    }
    if(req.url == '/anvar'){
        res.write(fs.readFileSync(getRouters[req.url]))
    }
    if(req.url == '/qodir'){
        res.write(fs.readFileSync(getRouters[req.url]))
    }
    if(req.url == '/about'){
        res.write(fs.readFileSync(getRouters[req.url]))
    }
    if(req.url == '/galary'){
        res.write(fs.readFileSync(getRouters[req.url]))
    }
    res.end()
});
const getRouters = {
    "/":"router/index.html",
    "/users":"router/index_users.html",
    "/sobir":"router/routerSobir.html",
    "/anvar":"router/routerAnvar.html",
    "/qodir":"router/routerQodir.html",
    "/galary":"router/index_gallery.html",
    "/about":"router/index_about.html"
}

server.listen(PORT, () => console.log(`Server is run${PORT}`));