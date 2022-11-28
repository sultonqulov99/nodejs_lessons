const http = require('http')
const url = require('url')
const querystring = require('querystring')
const PORT = process.env.PORT || 1099
const host = 'localhost'

const controllers = require('./module/index.js')
require('./database/index.js')

function app (req,res){
    let {query,pathname} = url.parse(req.url);
    let method = req.method.toUpperCase()
    let {headers} = req
    query = querystring.parse(query)
    req.query = query
    if(method != 'GET'){
        req.body = new Promise( (resolve,reject) => {
            let str = ''
            req.on('data',chunk => str += chunk)
            req.on('end', ()=> {
                try {
                    const parsedJson =  JSON.parse(str) 
                    resolve(parsedJson)
                } catch (error) {
                    reject(new Error('Invalid JSON data!'))
                }
            })
        })
    }
    
    if(Object.keys(controllers).includes(method) && controllers[method][pathname]){
        controllers[method][pathname](req,res)
    }
    else{
        return res.end(`cennot ${method} /${pathname}`)
    }
}

const server = http.createServer(app)
server.listen(PORT, ()=> console.log(`Server is run http://${host}:${PORT}`))