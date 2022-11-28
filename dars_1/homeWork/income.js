const fs = require('fs/promises')
const [,,amount,purpose] = process.argv

!async function () {
    if(isNaN(+amount) || +amount > 1000 || +amount < 0){
        return console.log('> Invalid amound');
    }
    if(!isNaN(+purpose) || purpose.length > 15){
        return console.log('> Invalid purpose');
    }
    let income = await fs.readFile('database/income.json')
    income = JSON.parse(income) || []

    id = income.length ? income[income.length -1].id + 1 : 1

    income.push({"id":id,"amount":amount,"purpose": purpose,"date": new Date().toISOString().slice(0, 10)})

    await fs.writeFile('database/income.json', JSON.stringify(income,null,4))

    console.table('> income added successfully');
}()