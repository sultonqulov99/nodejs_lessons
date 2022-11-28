const express = require('./lib/express.js')
const PORT = process.env.PORT || 3000 
const path = require('path')

const app = new express()
app.set('views', path.join(__dirname,'public'))
app.set('static', path.join(__dirname,'public'))
app.get('/',(req,res)=> res.render('index'))

app.listen(PORT, () => console.log('cilent server is running on http://localhost:'+PORT))