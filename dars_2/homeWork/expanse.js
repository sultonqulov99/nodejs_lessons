const fs = require('fs/promises')
const [,,zapros,amount,purpose,expanseId] = process.argv

!async function () {
    let expanse = await fs.readFile('database/expanse.json')
    expanse = JSON.parse(expanse) || []

    if(zapros == 'GET' && amount == undefined && purpose == undefined){
        let expanse1 = await fs.readFile('database/expanse.json', 'utf-8')
        console.log('> Total expanse');
        console.table(JSON.parse(expanse1).map((el) =>  {
            return {id:el.id, amount: el.amount + "$",purpose:el.purpose,date:el.date}
        }))
        return
    }

    if(zapros == 'POST' && +amount == amount && +purpose != purpose && amount != undefined && purpose != undefined && process.argv.length <= 5){
    id = expanse.length ? expanse[expanse.length -1].id + 1 : 1
    expanse.push({"id":id,"amount":amount,"purpose": purpose,"date": new Date().toISOString().slice(0, 10)})

    await fs.writeFile('database/expanse.json', JSON.stringify(expanse,null,4))

    console.table('> expanse added successfully');
    }

    if(zapros == 'DELETE' && +amount == amount && purpose == undefined) {
        let respons = expanse.filter(user => user.id != amount)
        await fs.writeFile('database/expanse.json',JSON.stringify(respons,null,4))

        console.table('> expanse deleted successfully');

    }

    if(zapros == 'PUT' && +amount == amount){
        let respons = expanse.find(user => user.id == amount)
        if(process.argv.length == 5 && [...purpose].splice(0,6).join('') == 'amount' && +[...purpose].splice(7).join('') == [...purpose].splice(7).join('')){
            respons.amount =[...purpose].splice(7).join('')

            console.table('> expanse update successfully');
        }
        if(process.argv.length == 5 && [...purpose].splice(0,7).join('') == 'purpose' && +[...purpose].splice(8).join('') != [...purpose].splice(8).join('')){
            respons.purpose = [...purpose].splice(8).join('')

            console.table('> expanse update successfully');
        }
        if(process.argv.length == 6) {
            respons.amount = [...purpose].splice(7).join('')
            respons.purpose = [...expanseId].splice(8).join('')
            console.table('> expanse update successfully');
        }
        await fs.writeFile('database/expanse.json',JSON.stringify(expanse,null,4))
    }
    
}()