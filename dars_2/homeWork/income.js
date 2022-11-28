const fs = require('fs/promises')
const [,,zapros,amount,purpose,incomeId] = process.argv
income = []

!async function () {
    let income = await fs.readFile('database/income.json')
    income = JSON.parse(income) || []

    if(zapros == 'GET' && amount == undefined && purpose == undefined){
        let income1 = await fs.readFile('database/income.json', 'utf-8')
        console.log('> Total income');
        console.table(JSON.parse(income1).map((el) =>  {
            return {id:el.id, amount: el.amount + "$",purpose:el.purpose,date:el.date}
        }))
        return
    }

    if(zapros == 'POST' && +amount == amount && +purpose != purpose && amount != undefined && purpose != undefined && process.argv.length <= 5){
    id = income.length ? income[income.length -1].id + 1 : 1
    income.push({"id":id,"amount":amount,"purpose": purpose,"date": new Date().toISOString().slice(0, 10)})

    await fs.writeFile('database/income.json', JSON.stringify(income,null,4))

    console.table('> income added successfully');
    }

    if(zapros == 'DELETE' && +amount == amount && purpose == undefined) {
        let respons = income.filter(user => user.id != amount)
        await fs.writeFile('database/income.json',JSON.stringify(respons,null,4))

        console.table('> income deleted successfully');

    }

    if(zapros == 'PUT' && +amount == amount){
        let respons = income.find(user => user.id == amount)
        if(process.argv.length == 5 && [...purpose].splice(0,6).join('') == 'amount' && +[...purpose].splice(7).join('') == [...purpose].splice(7).join('')){
            respons.amount =[...purpose].splice(7).join('')
            console.table('> income update successfully');
        }
        if(process.argv.length == 5 && [...purpose].splice(0,7).join('') == 'purpose' && +[...purpose].splice(8).join('') != [...purpose].splice(8).join('')){
            respons.purpose = [...purpose].splice(8).join('')

            console.table('> income update successfully');
        }
        if(process.argv.length == 6) {
            respons.amount = [...purpose].splice(7).join('')
            respons.purpose = [...incomeId].splice(8).join('')
            console.table('> income update successfully');
        }
        await fs.writeFile('database/income.json',JSON.stringify(income,null,4))
    }
    
}()