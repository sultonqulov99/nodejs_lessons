const fs = require('fs/promises')
const [,,amount,purpose] = process.argv
expanse = []

!async function () {
    if(isNaN(+amount) || +amount > 1000 || +amount < 0){
        return console.log('> Invalid amound');
    }
    if(!isNaN(+purpose) || purpose.length > 15){
        return console.log('> Invalid purpose');
    }
    let expanse = await fs.readFile('database/expanse.json')
    expanse = JSON.parse(expanse) || []

    id = expanse.length ? expanse[expanse.length-1].id + 1 : 1
    expanse.push({"id":id,"amount":amount,"purpose": purpose,"date": new Date().toISOString().slice(0, 10)})

    await fs.writeFile('database/expanse.json', JSON.stringify(expanse,null,4))
    console.table('> expanse added successfully');
}()